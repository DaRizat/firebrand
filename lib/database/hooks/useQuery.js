"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
function useQuery(query, event) {
    var database = react_1.useContext(FirebaseContext_1.FirebaseContext).database;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(undefined), data = _b[0], setData = _b[1];
    var _c = react_1.useState(undefined), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        if (!query)
            return;
        setLoading(true);
        query.once(event, function (snap) {
            setLoading(false);
            setData(snap && snap.val());
        }, function (err) {
            setLoading(false);
            setError(err.toString());
        });
    }, [query]);
    return [data, loading, error];
}
exports.default = useQuery;
