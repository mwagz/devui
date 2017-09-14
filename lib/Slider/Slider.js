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

var _createStyledComponent = require('../utils/createStyledComponent');

var _createStyledComponent2 = _interopRequireDefault(_createStyledComponent);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

var _common = require('./styles/common');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SliderWrapper = (0, _createStyledComponent2.default)(styles);
var ContainerWithValue = (0, _createStyledComponent2.default)(_common.containerStyle);

var Slider = function (_Component) {
  _inherits(Slider, _Component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      _this.props.onChange(parseFloat(e.target.value));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.label !== this.props.label || nextProps.value !== this.props.value || nextProps.max !== this.props.max || nextProps.min !== this.props.min || nextProps.withValue !== this.props.withValue || nextProps.disabled !== this.props.disabled;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          sublabel = _props.sublabel,
          withValue = _props.withValue,
          theme = _props.theme,
          rest = _objectWithoutProperties(_props, ['label', 'sublabel', 'withValue', 'theme']);

      var value = rest.value,
          max = rest.max,
          min = rest.min,
          disabled = rest.disabled;

      var absMax = max - min;
      var percent = (value - min) / absMax * 100;
      var slider = _react2.default.createElement('input', _extends({}, rest, { onChange: this.onChange, type: 'range' }));

      return _react2.default.createElement(
        SliderWrapper,
        {
          percent: percent,
          disabled: disabled || absMax === 0,
          withLabel: !!label,
          theme: theme
        },
        label && _react2.default.createElement(
          'label',
          null,
          label,
          ' ',
          sublabel && _react2.default.createElement(
            'span',
            null,
            sublabel
          )
        ),
        !withValue ? slider : _react2.default.createElement(
          ContainerWithValue,
          { theme: theme },
          slider,
          _react2.default.createElement(
            'div',
            null,
            value
          )
        )
      );
    }
  }]);

  return Slider;
}(_react.Component);

exports.default = Slider;


Slider.propTypes = {
  value: _propTypes2.default.number,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  label: _propTypes2.default.string,
  sublabel: _propTypes2.default.string,
  withValue: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  theme: _propTypes2.default.object
};

Slider.defaultProps = { value: 0, min: 0, max: 100 };