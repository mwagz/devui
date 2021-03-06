'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _codemirror = require('codemirror');

var _codemirror2 = _interopRequireDefault(_codemirror);

var _styles = require('./styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditorContainer = _styledComponents2.default.div('', function (_ref) {
  var theme = _ref.theme;
  return theme.scheme === 'default' && theme.light ? _styles.defaultStyle : (0, _styles.themedStyle)(theme);
});

var Editor = function (_Component) {
  _inherits(Editor, _Component);

  function Editor() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Editor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Editor.__proto__ || Object.getPrototypeOf(Editor)).call.apply(_ref2, [this].concat(args))), _this), _this.getRef = function (node) {
      _this.node = node;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.cm = (0, _codemirror2.default)( // eslint-disable-line new-cap
      this.node, {
        value: this.props.value,
        mode: this.props.mode,
        lineNumbers: this.props.lineNumbers,
        lineWrapping: this.props.lineWrapping,
        readOnly: this.props.readOnly,
        autofocus: this.props.autofocus,
        foldGutter: this.props.foldGutter,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
      });

      if (this.props.onChange) {
        this.cm.on('change', function (doc, change) {
          _this2.props.onChange(doc.getValue(), change);
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.cm.getValue()) {
        this.cm.setValue(nextProps.value);
      }
      if (nextProps.readOnly !== this.props.readOnly) {
        this.cm.setOption('readOnly', nextProps.readOnly);
      }
      if (nextProps.lineNumbers !== this.props.lineNumbers) {
        this.cm.setOption('lineNumbers', nextProps.lineNumbers);
      }
      if (nextProps.lineWrapping !== this.props.lineWrapping) {
        this.cm.setOption('lineWrapping', nextProps.lineWrapping);
      }
      if (nextProps.foldGutter !== this.props.foldGutter) {
        this.cm.setOption('foldGutter', nextProps.foldGutter);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this.node;
      node.removeChild(node.children[0]);
      this.cm = null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(EditorContainer, { innerRef: this.getRef, theme: this.props.theme });
    }
  }]);

  return Editor;
}(_react.Component);

exports.default = Editor;


Editor.propTypes = {
  value: _propTypes2.default.string,
  mode: _propTypes2.default.string,
  lineNumbers: _propTypes2.default.bool,
  lineWrapping: _propTypes2.default.bool,
  readOnly: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  foldGutter: _propTypes2.default.bool,
  autofocus: _propTypes2.default.bool,
  onChange: _propTypes2.default.func
};

Editor.defaultProps = {
  value: '',
  mode: 'javascript',
  lineNumbers: true,
  lineWrapping: false,
  readOnly: false,
  foldGutter: true,
  autofocus: false
};