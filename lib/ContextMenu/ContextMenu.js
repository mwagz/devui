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

var _index = require('./styles/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContextMenuWrapper = (0, _createStyledComponent2.default)(_index2.default);

var ContextMenu = function (_Component) {
  _inherits(ContextMenu, _Component);

  function ContextMenu(props) {
    _classCallCheck(this, ContextMenu);

    var _this = _possibleConstructorReturn(this, (ContextMenu.__proto__ || Object.getPrototypeOf(ContextMenu)).call(this, props));

    _this.onMouseUp = function (e) {
      e.target.blur();
    };

    _this.onClick = function (e) {
      _this.props.onClick(e.target.value);
    };

    _this.menuRef = function (c) {
      _this.menu = c;
    };

    _this.updateItems(props.items);
    return _this;
  }

  _createClass(ContextMenu, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.items !== this.props.items || nextProps.visible !== this.props.visible) {
        this.updateItems(nextProps.items);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.amendPosition();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.x !== this.props.x || prevProps.y !== this.props.y) {
        this.amendPosition();
      }
    }
  }, {
    key: 'amendPosition',
    value: function amendPosition() {
      var _props = this.props,
          x = _props.x,
          y = _props.y;
      var _document$documentEle = document.documentElement,
          scrollTop = _document$documentEle.scrollTop,
          scrollLeft = _document$documentEle.scrollLeft;
      var _window = window,
          innerWidth = _window.innerWidth,
          innerHeight = _window.innerHeight;

      var rect = this.menu.getBoundingClientRect();
      var left = x + scrollLeft;
      var top = y + scrollTop;

      if (y + rect.height > innerHeight) {
        top = innerHeight - rect.height;
      }
      if (x + rect.width > innerWidth) {
        left = innerWidth - rect.width;
      }
      if (top < 0) {
        top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
      }
      if (left < 0) {
        left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
      }

      this.menu.style.top = top + 'px';
      this.menu.style.left = left + 'px';
    }
  }, {
    key: 'updateItems',
    value: function updateItems(items) {
      var _this2 = this;

      this.items = items.map(function (item) {
        var value = item.value || item.name;
        if (item.type === 'button') return item;
        return _react2.default.createElement(
          'button',
          {
            key: value,
            value: value,
            onMouseUp: _this2.onMouseUp,
            onClick: _this2.onClick
          },
          item.name
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ContextMenuWrapper,
        {
          innerRef: this.menuRef,
          left: this.props.x,
          top: this.props.y,
          visible: this.props.visible
        },
        this.items
      );
    }
  }]);

  return ContextMenu;
}(_react.Component);

exports.default = ContextMenu;


ContextMenu.propTypes = {
  items: _propTypes2.default.array.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  x: _propTypes2.default.number.isRequired,
  y: _propTypes2.default.number.isRequired,
  visible: _propTypes2.default.bool
};