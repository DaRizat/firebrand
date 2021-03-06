"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var FirebaseContext_1 = require("../../app/FirebaseContext");
function lazyUseCollection(path) {
    var firestore = react_1.useContext(FirebaseContext_1.FirebaseContext).firestore;
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var _b = react_1.useState(undefined), data = _b[0], setData = _b[1];
    var _c = react_1.useState(undefined), error = _c[0], setError = _c[1];
    var get = react_1.useCallback(function (id, opts) {
        function fetch() {
            return __awaiter(this, void 0, void 0, function () {
                var where, orderBy, startAt, startAfter, limit, ref_1, docs_1, snap, last, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            where = opts.where, orderBy = opts.orderBy, startAt = opts.startAt, startAfter = opts.startAfter, limit = opts.limit;
                            if (!firestore) return [3 /*break*/, 4];
                            setLoading(true);
                            ref_1 = firestore.collection(path);
                            if (where) {
                                where.forEach(function (w) {
                                    ref_1 = ref_1.where(w[0], w[1], w[2]);
                                });
                            }
                            if (orderBy) {
                                orderBy.forEach(function (o) {
                                    ref_1 = ref_1.orderBy(o[0], o[1]);
                                });
                            }
                            if (limit)
                                ref_1 = ref_1.limit(limit);
                            if (startAt)
                                ref_1 = ref_1.startAt(startAt);
                            if (startAfter)
                                ref_1 = ref_1.startAfter(startAfter);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            docs_1 = {};
                            return [4 /*yield*/, ref_1.get()];
                        case 2:
                            snap = _a.sent();
                            snap.forEach(function (doc) {
                                docs_1[doc.id] = doc.data();
                            });
                            last = snap.docs[snap.docs.length - 1];
                            setLoading(false);
                            setData({ docs: docs_1, last: last });
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            setLoading(false);
                            setError(err_1.toString());
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        fetch();
    }, [firestore, path]);
    return [get, { data: data, loading: loading, error: error }];
}
exports.default = lazyUseCollection;
