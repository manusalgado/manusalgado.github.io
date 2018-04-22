console.log('todo ok de este lado');

// Main Interface

const app = {
  title: 'Asignaciones pendientes',
  subtitle: 'Ingrese la asignacion pendiente por realizar de su proyecto actual.',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderNotes();
  }
}

const onRemoveAll = () => {
  app.options = [];
  renderNotes();
}

const makeJob = () => {
  const randomNumb = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNumb];
  alert(option);
}

const appRoot = document.getElementById('app');

const numbers = [51, 100, 1500];

const renderNotes = () => {
  const template =(
      <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Aqui esta tu opcion' : 'Ninguna opcion'}</p>
        <button disabled={app.options.length === 0} onClick={makeJob}>¿Que debo hacer?</button>
        <button onClick={onRemoveAll}>Borrar todo</button>
        <ol>
          {
            app.options.map( (option) => <li key={option}>{option}</li>)
          }
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Agregar tarea</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
}
renderNotes();
