"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 5000;

_app["default"].listen(port, function () {
  console.log("Servidor en puerto ".concat(port));
});