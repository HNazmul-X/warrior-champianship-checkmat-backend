import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectingDefaultRoute } from "./router";
import defaultMiddleware from "./middleware/defaultMiddleware";
import mongoose from "mongoose";
import { logSuccess } from "./utilities/colorLogging";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

//Connecting Default middleware
defaultMiddleware(app);

//Connecting To database
const mongoURI = process.env.MONGODB_LOCAL as string;
mongoose.connect(mongoURI, { dbName: "Warrior-Competition-V2" }).then(() => logSuccess("Database Connected"));

//Connecting Default Route
connectingDefaultRoute(app);

app.listen(port, () => console.log(`listening On http://localhost:${port}`));
