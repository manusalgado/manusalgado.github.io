
class TareasApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState( () => {
      return {
        options: []
      };
    });
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){
    if (!option) {
      return 'Ingrese un valor correcto';
    }else if (this.state.options.indexOf(option) > -1) {
      return 'Esta tarea ya existe';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render(){
    const title = "Tareas App";
    const subtitle = "Ingresa las nuevas tareas";

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Tareas
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AgregarTareas
          handleAddOption={this.handleAddOption}
         />
      </div>
    );
  }
}
class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
class Action extends React.Component {
  render(){
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >
          ¿Que es mas importante?
        </button>
      </div>
    );
  }
}
class Tareas extends React.Component {

  render(){
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Quitar todas</button>
        {
          this.props.options.map( (option) => <Tarea key={option} optionText={option}/>)
        }
      </div>
    );
  }
}
class Tarea extends React.Component {
  render(){
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}
class AgregarTareas extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });

  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<TareasApp />, document.getElementById('app'));
