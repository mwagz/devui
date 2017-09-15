'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Form = require('../Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DialogWrapper = (0, _createStyledComponent2.default)(styles);

var Dialog = function (_ref) {
  _inherits(Dialog, _ref);

  function Dialog() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Dialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Dialog.__proto__ || Object.getPrototypeOf(Dialog)).call.apply(_ref2, [this].concat(args))), _this), _this.onSubmit = function () {
      if (_this.submitButton) _this.submitButton.click();else _this.props.onSubmit();
    }, _this.getFormButtonRef = function (node) {
      _this.submitButton = node;
    }, _this.onKeyDown = function (e) {
      if (e.keyCode === 27 /* esc */) {
          e.preventDefault();
          _this.props.onDismiss(false);
        }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Dialog, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          modal = _props.modal,
          open = _props.open,
          fullWidth = _props.fullWidth,
          title = _props.title,
          children = _props.children,
          actions = _props.actions,
          noHeader = _props.noHeader,
          noFooter = _props.noFooter,
          submitText = _props.submitText,
          onDismiss = _props.onDismiss,
          rest = _objectWithoutProperties(_props, ['modal', 'open', 'fullWidth', 'title', 'children', 'actions', 'noHeader', 'noFooter', 'submitText', 'onDismiss']);

      var schema = rest.schema;

      return _react2.default.createElement(
        DialogWrapper,
        {
          open: open,
          fullWidth: fullWidth,
          onKeyDown: this.onKeyDown,
          theme: rest.theme
        },
        _react2.default.createElement('div', { onClick: !modal && onDismiss }),
        _react2.default.createElement(
          'div',
          null,
          !noHeader && _react2.default.createElement(
            'div',
            { className: 'mc-dialog--header' },
            _react2.default.createElement(
              'div',
              null,
              schema ? schema.title || title : title
            ),
            !modal && _react2.default.createElement(
              'button',
              { onClick: onDismiss },
              '\xD7'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'mc-dialog--body' },
            children,
            schema && _react2.default.createElement(
              _Form2.default,
              rest,
              !noFooter && _react2.default.createElement('input', {
                type: 'submit',
                ref: this.getFormButtonRef,
                className: 'mc-dialog--hidden'
              })
            )
          ),
          !noFooter && (actions ? _react2.default.createElement(
            'div',
            { className: 'mc-dialog--footer' },
            submitText ? [].concat(_toConsumableArray(actions), [_react2.default.createElement(
              _Button2.default,
              { key: 'default-submit', primary: true, onClick: this.onSubmit },
              submitText
            )]) : actions
          ) : _react2.default.createElement(
            'div',
            { className: 'mc-dialog--footer' },
            _react2.default.createElement(
              _Button2.default,
              { onClick: onDismiss },
              'Cancel'
            ),
            _react2.default.createElement(
              _Button2.default,
              { primary: true, onClick: this.onSubmit },
              submitText || 'Submit'
            )
          ))
        )
      );
    }
  }]);

  return Dialog;
}(_react.PureComponent || _react.Component);

exports.default = Dialog;


Dialog.propTypes = {
  open: _propTypes2.default.bool,
  title: _propTypes2.default.string,
  children: _propTypes2.default.any,
  actions: _propTypes2.default.node,
  submitText: _propTypes2.default.string,
  fullWidth: _propTypes2.default.bool,
  noHeader: _propTypes2.default.bool,
  noFooter: _propTypes2.default.bool,
  modal: _propTypes2.default.bool,
  onDismiss: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  theme: _propTypes2.default.object
};