"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playerController_1 = require("../controller/playerController");
const playerRouter = (0, express_1.Router)();
playerRouter.get("/get-all", playerController_1.getAllPlayerController);
playerRouter.post("/register", playerController_1.registerNewPlayerController);
playerRouter.delete("/delete/:playerId", playerController_1.deleteOnePlayerController);
exports.default = playerRouter;
