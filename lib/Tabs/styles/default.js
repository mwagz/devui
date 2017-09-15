'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.style = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 0 0 1;\n  padding-left: 1px;\n  background-color: ', ';\n  width: 100%;\n  overflow: hidden;\n  ', '\n\n  > div {\n    display: flex;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n\n    button {\n      background-color: ', ';\n      color: ', ';\n      letter-spacing: 0.3px;\n      min-height: 30px;\n      padding: 2px 8px;\n      margin-right: 1px;\n      border: ', 'px solid transparent;\n      cursor: pointer;\n      text-align: center;\n      overflow: hidden;\n      outline: 0;\n      transition: all 0.5s;\n\n      &:hover,\n      &:focus {\n        background-color: ', ';\n        text-shadow: ', ' 0 1px;\n      }\n    }\n\n    > [data-selected] {\n      ', '\n      color: ', ';\n    }\n  }\n  > div:nth-child(2) {\n    display: block;\n    z-index: 10;\n\n    button {\n      display: block;\n      background: ', ';\n      width: 100%;\n\n      &:hover,\n      &:focus {\n        background-color: ', ';\n        text-shadow: ', ' 0 1px;\n      }\n    }\n  }\n'], ['\n  display: flex;\n  flex: 0 0 1;\n  padding-left: 1px;\n  background-color: ', ';\n  width: 100%;\n  overflow: hidden;\n  ', '\n\n  > div {\n    display: flex;\n    align-items: flex-end;\n    flex-wrap: nowrap;\n\n    button {\n      background-color: ', ';\n      color: ', ';\n      letter-spacing: 0.3px;\n      min-height: 30px;\n      padding: 2px 8px;\n      margin-right: 1px;\n      border: ', 'px solid transparent;\n      cursor: pointer;\n      text-align: center;\n      overflow: hidden;\n      outline: 0;\n      transition: all 0.5s;\n\n      &:hover,\n      &:focus {\n        background-color: ', ';\n        text-shadow: ', ' 0 1px;\n      }\n    }\n\n    > [data-selected] {\n      ', '\n      color: ', ';\n    }\n  }\n  > div:nth-child(2) {\n    display: block;\n    z-index: 10;\n\n    button {\n      display: block;\n      background: ', ';\n      width: 100%;\n\n      &:hover,\n      &:focus {\n        background-color: ', ';\n        text-shadow: ', ' 0 1px;\n      }\n    }\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var style = exports.style = function style(_ref) {
  var theme = _ref.theme,
      main = _ref.main;
  return (0, _styledComponents.css)(_templateObject, theme.base01, !main && '\n  border-top: 1px solid ' + theme.base01 + ';\n  border-bottom: 1px solid ' + theme.base02 + ';\n  ', theme.base01, theme.base05, main ? '2' : '1', main ? theme.base02 : theme.base00, theme.base01, main ? 'border-bottom: 2px solid ' + theme.base0D + ';' : '\n      background-color: ' + theme.base00 + ';\n      border: 1px solid ' + theme.base02 + ';\n      border-bottom: 1px solid ' + theme.base00 + ';\n      box-shadow: 0 1px ' + theme.base00 + ';\n      ', theme.base07, theme.base00, main ? theme.base02 : theme.base00, theme.base01);
};