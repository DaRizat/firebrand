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
var OrderByChild = function (_a) {
    var childKey = _a.childKey, children = _a.children;
    var _b = react_1.useContext(Firebase_1.QueryContext), currentRef = _b.currentRef, setCurrentRef = _b.setCurrentRef;
    react_1.useEffect(function () {
        if (currentRef && setCurrentRef) {
            var nextRef = currentRef.orderByChild(childKey);
            setCurrentRef(nextRef);
        }
    }, []);
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
exports.default = react_1.default.memo(OrderByChild);
