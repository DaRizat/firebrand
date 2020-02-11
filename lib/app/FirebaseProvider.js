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
var FirebaseContext_1 = require("./FirebaseContext");
var Provider = FirebaseContext_1.FirebaseContext.Provider;
var FirebaseProvider = function (_a) {
    var children = _a.children, value = _a.value;
    var firebase = value.firebase, database = value.database, auth = value.auth, firestore = value.firestore;
    var _b = react_1.useState(firebase), fb = _b[0], setFb = _b[1];
    var _c = react_1.useState(database), db = _c[0], setDb = _c[1];
    var _d = react_1.useState(auth), a = _d[0], setA = _d[1];
    var _e = react_1.useState(firestore), fs = _e[0], setFs = _e[1];
    return (react_1.default.createElement(Provider, { value: {
            firebase: fb,
            setFirebase: setFb,
            auth: a,
            setAuth: setA,
            firestore: fs,
            setFirestore: setFs,
            database: db,
            setDatabase: setDb,
        } }, children));
};
exports.default = FirebaseProvider;
