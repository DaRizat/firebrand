"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Firebase_1 = require("../context/Firebase");
var Provider = Firebase_1.FirebaseContext.Provider;
var QueryProvider = Firebase_1.QueryContext.Provider;
var FirebaseProvider = function (_a) {
    var children = _a.children, value = _a.value;
    var firebase = value.firebase, database = value.database;
    var _b = react_1.useState(firebase), fb = _b[0], setFb = _b[1];
    var _c = react_1.useState(database), db = _c[0], setDb = _c[1];
    var _d = react_1.useState(), currentRef = _d[0], setCurrentRef = _d[1];
    return (react_1.default.createElement(Provider, { value: { firebase: fb, setFirebase: setFb, database: db, setDatabase: setDb } },
        react_1.default.createElement(QueryProvider, { value: { currentRef: currentRef, setCurrentRef: setCurrentRef } }, children)));
};
exports.default = FirebaseProvider;
