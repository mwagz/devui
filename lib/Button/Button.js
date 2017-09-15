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

var _common = require('./styles/common');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonWrapper = (0, _createStyledComponent2.default)(styles, 'button');
var TooltipWrapper = (0, _createStyledComponent2.default)(_common.tooltipStyle);
var CommonWrapper = (0, _createStyledComponent2.default)(_common.commonStyle);

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), _this), _this.onMouseUp = function (e) {
      e.target.blur();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Button, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.children !== this.props.children || nextProps.disabled !== this.props.disabled || nextProps.mark !== this.props.mark || nextProps.size !== this.props.size || nextProps.primary !== this.props.primary || nextProps.tooltipPosition !== this.props.tooltipPosition || nextProps.title !== this.props.title;
    }
  }, {
    key: 'render',
    value: function render() {
      var button = _react2.default.createElement(
        ButtonWrapper,
        {
          theme: this.props.theme,
          'aria-label': this.props.title,
          primary: this.props.primary,
          disabled: this.props.disabled,
          onMouseUp: this.onMouseUp,
          onClick: this.props.onClick,
          type: this.props.type
        },
        this.props.children
      );

      var Wrapper = this.props.title ? TooltipWrapper : CommonWrapper;
      return _react2.default.createElement(
        Wrapper,
        {
          theme: this.props.theme,
          tooltipTitle: this.props.title,
          tooltipPosition: this.props.tooltipPosition,
          size: this.props.size,
          mark: this.props.mark
        },
        button
      );
    }
  }]);

  return Button;
}(_react.Component);

exports.default = Button;


Button.propTypes = {
  children: _propTypes2.default.any.isRequired,
  title: _propTypes2.default.string,
  tooltipPosition: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right', 'bottom-left', 'bottom-right', 'top-left', 'top-right']),
  onClick: _propTypes2.default.func,
  type: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  primary: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['big', 'normal', 'small']),
  mark: _propTypes2.default.oneOf([false, 'base08', 'base09', 'base0A', 'base0B', 'base0C', 'base0D', 'base0E', 'base0F']),
  theme: _propTypes2.default.object
};

Button.defaultProps = {
  tooltipPosition: 'top'
};