import { Router } from "express";
import {
    addPlayerManuallyController,
    deleteOnePlayerController,
    getAllPlayerController,
    getPlayerByIdController,
    makePaymentController,
    registerNewPlayerController,
} from "../controller/playerController";

const playerRouter = Router();

playerRouter.get("/get-all", getAllPlayerController);
playerRouter.post("/register", registerNewPlayerController);
playerRouter.delete("/delete/:playerId", deleteOnePlayerController);
playerRouter.post("/make-payment", makePaymentController);
playerRouter.get("/:playerId", getPlayerByIdController);
playerRouter.post("/add-player-manually", addPlayerManuallyController);
playerRouter.delete("/single/:playerId", deleteOnePlayerController);
export default playerRouter;
