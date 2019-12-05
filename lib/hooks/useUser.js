"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Auth_1 = require("../context/Auth");
var useUser = function () {
    var user = react_1.useContext(Auth_1.AuthContext).user;
    return user;
};
exports.default = useUser;
