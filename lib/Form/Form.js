'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _widgets = require('./widgets');

var _widgets2 = _interopRequireDefault(_widgets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormContainer = (0, _createStyledComponent2.default)(_styles2.default, _reactJsonschemaForm2.default);

var Form = function (_ref) {
  _inherits(Form, _ref);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          widgets = _props.widgets,
          children = _props.children,
          submitText = _props.submitText,
          primaryButton = _props.primaryButton,
          noSubmit = _props.noSubmit,
          rest = _objectWithoutProperties(_props, ['widgets', 'children', 'submitText', 'primaryButton', 'noSubmit']);

      return _react2.default.createElement(
        FormContainer,
        _extends({}, rest, { widgets: _extends({}, _widgets2.default, widgets) }),
        noSubmit ? _react2.default.createElement('noscript', null) : children || _react2.default.createElement(
          _Button2.default,
          { size: 'big', primary: primaryButton, theme: rest.theme, type: 'submit' },
          submitText || 'Submit'
        )
      );
    }
  }]);

  return Form;
}(_react.PureComponent || _react.Component);

exports.default = Form;


Form.propTypes = {
  children: _propTypes2.default.any,
  submitText: _propTypes2.default.string,
  primaryButton: _propTypes2.default.bool,
  noSubmit: _propTypes2.default.bool,
  schema: _propTypes2.default.object.isRequired,
  uiSchema: _propTypes2.default.object,
  formData: _propTypes2.default.any,
  widgets: _propTypes2.default.objectOf(_propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]))
};