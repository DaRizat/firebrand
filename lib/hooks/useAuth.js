"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Auth_1 = require("../context/Auth");
var useAuth = function () {
    var auth = react_1.useContext(Auth_1.AuthContext).auth;
    return auth;
};
exports.default = useAuth;
