"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Firebase_1 = require("../context/Firebase");
var useDatabase = function () {
    var database = react_1.useContext(Firebase_1.FirebaseContext).database;
    return database;
};
exports.default = useDatabase;
