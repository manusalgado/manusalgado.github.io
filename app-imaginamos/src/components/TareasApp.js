import React from 'react';
import AgregarTareas from './AgregarTareas';
import Header from './Header';
import Action from './Action';
import Tareas from './Tareas';

export default class TareasApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState( () => ({ options: []}));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
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
          handleDeleteOption={this.handleDeleteOption}
        />
        <AgregarTareas
          handleAddOption={this.handleAddOption}
         />
      </div>
    );
  }
}
