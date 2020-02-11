"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
function useUpdate(reference) {
    var database = react_1.useContext(FirebaseContext_1.FirebaseContext).database;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    function write(data) {
        if (database) {
            database.ref(reference).update(data, function (err) {
                setLoading(false);
                setError((err) ? err.toString() : 'An unknown error occurred.');
            });
        }
    }
    return [write, loading, error];
}
exports.default = useUpdate;
