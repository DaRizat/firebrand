"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
function useUpdate(collectionPath) {
    var firestore = react_1.useContext(FirebaseContext_1.FirebaseContext).firestore;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(function () { }), func = _b[0], setFunc = _b[1];
    var _c = react_1.useState(undefined), error = _c[0], setError = _c[1];
    react_1.useEffect(function () {
        if (firestore) {
            var ref_1 = firestore.collection(collectionPath);
            var updateFunc_1 = function (docId, data) {
                setLoading(true);
                ref_1.doc(docId).update(data)
                    .then(function () {
                    setLoading(false);
                })
                    .catch(function (err) {
                    setError(err.toString());
                    setLoading(false);
                });
            };
            setFunc(function (id, data) { return updateFunc_1(id, data); });
        }
    }, [collectionPath, firestore]);
    return [func, loading, error];
}
exports.default = useUpdate;
