"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const all_middlewares = [express_1.default.urlencoded({ extended: true }), express_1.default.json(), express_1.default.static("/public"), (0, morgan_1.default)("dev")];
function default_1(app) {
    all_middlewares.forEach((middleware) => {
        app.use(middleware);
    });
}
exports.default = default_1;
