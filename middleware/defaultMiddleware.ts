import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";

const all_middlewares = [cors(), express.urlencoded({ extended: true }), express.json(), express.static("/public"), morgan("dev")];

export default function (app: Express) {
    all_middlewares.forEach((middleware) => {
        app.use(middleware);
    });
}
