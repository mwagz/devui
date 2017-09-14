'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('react-icons/lib/md/close');

var _close2 = _interopRequireDefault(_close);

var _warning = require('react-icons/lib/md/warning');

var _warning2 = _interopRequireDefault(_warning);

var _error = require('react-icons/lib/md/error');

var _error2 = _interopRequireDefault(_error);

var _checkCircle = require('react-icons/lib/md/check-circle');

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotificationWrapper = (0, _createStyledComponent2.default)(_styles2.default);

var Notification = function (_Component) {
  _inherits(Notification, _Component);

  function Notification() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.getIcon = function () {
      switch (_this.props.type) {
        case 'warning':
          return _react2.default.createElement(_warning2.default, null);
        case 'error':
          return _react2.default.createElement(_error2.default, null);
        case 'success':
          return _react2.default.createElement(_checkCircle2.default, null);
        default:
          return null;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Notification, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.children !== this.props.children || nextProps.type !== this.props.type;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        NotificationWrapper,
        { type: this.props.type, theme: this.props.theme },
        this.getIcon(),
        _react2.default.createElement(
          'span',
          null,
          this.props.children
        ),
        this.props.onClose && _react2.default.createElement(
          'button',
          { onClick: this.props.onClose },
          _react2.default.createElement(_close2.default, null)
        )
      );
    }
  }]);

  return Notification;
}(_react.Component);

exports.default = Notification;


Notification.propTypes = {
  children: _propTypes2.default.any.isRequired,
  type: _propTypes2.default.oneOf(['info', 'success', 'warning', 'error']),
  onClose: _propTypes2.default.func,
  theme: _propTypes2.default.object
};

Notification.defaultProps = {
  type: 'info'
};