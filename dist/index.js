"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = require("./router");
const defaultMiddleware_1 = __importDefault(require("./middleware/defaultMiddleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
//Connecting Default middleware
(0, defaultMiddleware_1.default)(app);
//Connecting Default Route
(0, router_1.connectingDefaultRoute)(app);
app.listen(port, () => console.log(`listening On http://localhost:${port}`));
