"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var AuthContext_1 = require("../AuthContext");
var useAuth = function () {
    var auth = react_1.useContext(AuthContext_1.AuthContext).auth;
    return auth;
};
exports.default = useAuth;
