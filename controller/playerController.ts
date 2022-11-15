import { Request, Response } from "express";
import PlayerModel from "../model/playerModel";
import { RouteController } from "../types/routeController";
import { logInfo } from "../utilities/colorLogging";

export const registerNewPlayerController: RouteController = async (req, res, next) => {
    try {
        const player = await new PlayerModel(req.body).save();
        res.json(player);
    } catch (e) {
        next && next(e);
    }
};

export const getAllPlayerController: RouteController = async (req, res, next) => {
    try {
        const allPlayer = await PlayerModel.find({});
        res.json(allPlayer);
    } catch (e) {
        next && next(e);
    }
};

export const deleteOnePlayerController: RouteController = async (req, res, next) => {
    try {
        const { playerId } = req.params;
        const deleted = await PlayerModel.findByIdAndDelete(playerId);
        res.json(deleted);
    } catch (e) {
        next && next();
    }
};
