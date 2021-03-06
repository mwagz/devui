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

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SegmentedWrapper = (0, _createStyledComponent2.default)(_styles2.default);

var SegmentedControl = function (_Component) {
  _inherits(SegmentedControl, _Component);

  function SegmentedControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SegmentedControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SegmentedControl.__proto__ || Object.getPrototypeOf(SegmentedControl)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      _this.props.onClick(e.target.value);
    }, _this.onMouseUp = function (e) {
      e.target.blur();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SegmentedControl, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.disabled !== this.props.disabled || nextProps.selected !== this.props.selected;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          values = _props.values,
          selected = _props.selected;

      return _react2.default.createElement(
        SegmentedWrapper,
        { disabled: this.props.disabled, theme: this.props.theme },
        values.map(function (button) {
          return _react2.default.createElement(
            'button',
            {
              key: button,
              value: button,
              'data-selected': button === selected ? true : undefined,
              onMouseUp: _this2.onMouseUp,
              onClick: _this2.onClick
            },
            button
          );
        })
      );
    }
  }]);

  return SegmentedControl;
}(_react.Component);

exports.default = SegmentedControl;


SegmentedControl.propTypes = {
  values: _propTypes2.default.array.isRequired,
  selected: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  theme: _propTypes2.default.object
};