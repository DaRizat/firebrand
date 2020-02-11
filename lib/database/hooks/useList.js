"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useList(options) {
    var ref = options.ref, eventType = options.eventType, orderFunction = options.orderFunction, orderByChildKey = options.orderByChildKey, paginate = options.paginate, pageSize = options.pageSize, page = options.page;
    var loading = react_1.useState(false)[0];
    var data = react_1.useState(undefined)[0];
    var error = react_1.useState(undefined)[0];
    react_1.useEffect(function () {
    }, [ref, eventType, orderFunction, orderByChildKey, paginate, pageSize, page]);
    return [data, loading, error];
}
exports.default = useList;
