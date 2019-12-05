"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fp_1 = __importDefault(require("lodash/fp"));
var reference = function (props) { return function (database) {
    return database.ref(props.reference);
}; };
var addLimitToFirst = function (props) { return function (ref) {
    var limitToFirst = props.limitToFirst;
    return (limitToFirst) ? ref.limitToFirst(limitToFirst) : ref;
}; };
var addLimitToLast = function (props) { return function (ref) {
    var limitToLast = props.limitToLast;
    return (limitToLast) ? ref.limitToLast(limitToLast) : ref;
}; };
var addEndAt = function (props) { return function (ref) {
    var endAt = props.endAt;
    return (endAt) ? ref.endAt(endAt) : ref;
}; };
var addStartAt = function (props) { return function (ref) {
    var startAt = props.startAt;
    return (startAt) ? ref.startAt(startAt) : ref;
}; };
var addOrderByChild = function (props) { return function (ref) {
    var orderByChild = props.orderByChild;
    return (orderByChild) ? ref.orderByChild(orderByChild) : ref;
}; };
exports.buildQueryFromProps = function (_a) {
    var database = _a.database, props = _a.props;
    try {
        var query = fp_1.default.pipe(reference(props), addOrderByChild(props), addStartAt(props), addEndAt(props), addLimitToFirst(props), addLimitToLast(props))(database);
        return query;
    }
    catch (err) {
        throw new Error(err);
    }
};
