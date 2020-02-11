"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var OrderByChild = function (_a) {
    var childKey = _a.childKey, children = _a.children;
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = react_1.default.memo(OrderByChild);
