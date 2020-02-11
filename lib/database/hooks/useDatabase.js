"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
var useDatabase = function () {
    var database = react_1.useContext(FirebaseContext_1.FirebaseContext).database;
    return database;
};
exports.default = useDatabase;
