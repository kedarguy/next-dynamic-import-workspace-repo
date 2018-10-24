"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dynamic = _interopRequireDefault(require("next/dynamic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DynamicComponent = (0, _dynamic.default)(function () {
  return import("./DynamicChild");
}, {
  loading: function loading() {
    return _react.default.createElement("div", {
      style: {
        backgroundColor: 'yellow'
      }
    }, "loading from components.............");
  }
});

var _default = function _default() {
  return _react.default.createElement("div", null, "div from example-components", _react.default.createElement("div", {
    style: {
      fontWeight: "bold"
    }
  }, "Dynamically imported child component here:", _react.default.createElement(DynamicComponent, null)));
};

exports.default = _default;