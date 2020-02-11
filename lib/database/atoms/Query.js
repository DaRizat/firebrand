"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
var queryHelper_1 = require("../helpers/queryHelper");
;
var Query = function (props) {
    var children = props.children, event = props.event, startAt = props.startAt;
    var database = react_1.useContext(FirebaseContext_1.FirebaseContext).database;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(undefined), error = _b[0], setError = _b[1];
    var _c = react_1.useState(undefined), data = _c[0], setData = _c[1];
    react_1.useEffect(function () {
        if (database) {
            setLoading(true);
            var query = queryHelper_1.buildQueryFromProps({ database: database, props: props });
            query.once(event, function (snap) {
                setLoading(false);
                var results = snap && snap.val();
                setData(results);
            }, function (err) {
                setLoading(false);
                setError(err.toString());
            });
        }
    }, [event, startAt, database, props]);
    return children({ data: data, loading: loading, error: error });
};
exports.default = Query;
