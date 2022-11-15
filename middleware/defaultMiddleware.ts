import express, { Express } from "express";
import morgan from "morgan";

const all_middlewares = [express.urlencoded({ extended: true }), express.json(), express.static("/public"), morgan("dev")];

export default function (app: Express) {
    all_middlewares.forEach((middleware) => {
        app.use(middleware);
    });
}
