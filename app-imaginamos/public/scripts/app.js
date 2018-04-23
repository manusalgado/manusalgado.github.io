'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TareasApp = function (_React$Component) {
  _inherits(TareasApp, _React$Component);

  function TareasApp(props) {
    _classCallCheck(this, TareasApp);

    var _this = _possibleConstructorReturn(this, (TareasApp.__proto__ || Object.getPrototypeOf(TareasApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(TareasApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Ingrese un valor correcto';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Esta tarea ya existe';
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = "Tareas App";
      var subtitle = "Ingresa las nuevas tareas";

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handlePick: this.handlePick
        }),
        React.createElement(Tareas, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AgregarTareas, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return TareasApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.props.handlePick,
            disabled: !this.props.hasOptions
          },
          '\xBFQue es mas importante?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Tareas = function (_React$Component4) {
  _inherits(Tareas, _React$Component4);

  function Tareas() {
    _classCallCheck(this, Tareas);

    return _possibleConstructorReturn(this, (Tareas.__proto__ || Object.getPrototypeOf(Tareas)).apply(this, arguments));
  }

  _createClass(Tareas, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleDeleteOptions },
          'Quitar todas'
        ),
        this.props.options.map(function (option) {
          return React.createElement(Tarea, { key: option, optionText: option });
        })
      );
    }
  }]);

  return Tareas;
}(React.Component);

var Tarea = function (_React$Component5) {
  _inherits(Tarea, _React$Component5);

  function Tarea() {
    _classCallCheck(this, Tarea);

    return _possibleConstructorReturn(this, (Tarea.__proto__ || Object.getPrototypeOf(Tarea)).apply(this, arguments));
  }

  _createClass(Tarea, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.props.optionText
      );
    }
  }]);

  return Tarea;
}(React.Component);

var AgregarTareas = function (_React$Component6) {
  _inherits(AgregarTareas, _React$Component6);

  function AgregarTareas(props) {
    _classCallCheck(this, AgregarTareas);

    var _this6 = _possibleConstructorReturn(this, (AgregarTareas.__proto__ || Object.getPrototypeOf(AgregarTareas)).call(this, props));

    _this6.handleAddOption = _this6.handleAddOption.bind(_this6);
    _this6.state = {
      error: undefined
    };
    return _this6;
  }

  _createClass(AgregarTareas, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AgregarTareas;
}(React.Component);

ReactDOM.render(React.createElement(TareasApp, null), document.getElementById('app'));
