"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectingDefaultRoute = void 0;
const express_1 = require("express");
const playerRouter_1 = __importDefault(require("./playerRouter"));
const defaultRouter = (0, express_1.Router)();
defaultRouter.get("/", (req, res) => {
    res.send(`<h1>Hey Don't Worry I am working</h1>`);
});
const routes = [
    {
        path: "/",
        handler: defaultRouter,
    },
    {
        path: "/api/player",
        handler: playerRouter_1.default,
    },
];
const connectingDefaultRoute = function (app) {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });
};
exports.connectingDefaultRoute = connectingDefaultRoute;
