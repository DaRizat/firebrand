"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Firebase_1 = require("./context/Firebase");
exports.FirebaseContext = Firebase_1.FirebaseContext;
exports.FirebaseConsumer = Firebase_1.FirebaseConsumer;
exports.FirebaseProvider = Firebase_1.FirebaseProvider;
var firebase_1 = __importDefault(require("./config/firebase"));
exports.firebaseConfig = firebase_1.default;
var useOn_1 = __importDefault(require("./hooks/useOn"));
exports.useOn = useOn_1.default;
var useUpdate_1 = __importDefault(require("./hooks/useUpdate"));
exports.useUpdate = useUpdate_1.default;
