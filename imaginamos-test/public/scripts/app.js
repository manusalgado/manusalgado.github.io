'use strict';

console.log('todo ok de este lado');

// Main Interface

var app = {
  title: 'Asignaciones pendientes',
  subtitle: 'Ingrese la asignacion pendiente por realizar de su proyecto actual.',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderNotes();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderNotes();
};

var makeJob = function makeJob() {
  var randomNumb = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNumb];
  alert(option);
};

var appRoot = document.getElementById('app');

var numbers = [51, 100, 1500];

var renderNotes = function renderNotes() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Aqui esta tu opcion' : 'Ninguna opcion'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeJob },
      '\xBFQue debo hacer?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Borrar todo'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Agregar tarea'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderNotes();
