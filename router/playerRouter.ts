import { Router } from "express";
import { deleteOnePlayerController, getAllPlayerController, registerNewPlayerController } from "../controller/playerController";

const playerRouter = Router();

playerRouter.get("/get-all", getAllPlayerController);
playerRouter.post("/register", registerNewPlayerController);
playerRouter.delete("/delete/:playerId", deleteOnePlayerController);

export default playerRouter;
