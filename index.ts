import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectingDefaultRoute } from "./router";
import defaultMiddleware from "./middleware/defaultMiddleware";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

//Connecting Default middleware
defaultMiddleware(app);

//Connecting Default Route
connectingDefaultRoute(app);

app.listen(port, () => console.log(`listening On http://localhost:${port}`));
