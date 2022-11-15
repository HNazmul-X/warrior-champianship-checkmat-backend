"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectingDefaultRoute = void 0;
const express_1 = require("express");
const defaultRouter = (0, express_1.Router)();
defaultRouter.get("/", (req, res) => {
    res.send(`<h1>Hey Don't Worry I am working</h1>`);
});
const routes = [
    {
        path: "/",
        handler: defaultRouter,
    },
];
const connectingDefaultRoute = function (app) {
    routes.forEach((route) => {
        app.use(route.path, route.handler);
    });
};
exports.connectingDefaultRoute = connectingDefaultRoute;
