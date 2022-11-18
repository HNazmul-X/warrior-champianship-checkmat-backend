import { Request, Response } from "express";
import PaypalPaymentsModel from "../model/PaypalPaymentModel";
import PlayerModel from "../model/playerModel";
import { RouteController } from "../types/routeController";
import { logInfo } from "../utilities/colorLogging";

export const registerNewPlayerController: RouteController = async (req, res, next) => {
    try {
        const { playerInfo, paymentInfo } = req.body;
        const createdPaymentInfo = await new PaypalPaymentsModel(paymentInfo).save();

        playerInfo.paymentId = createdPaymentInfo._id;
        const player = await new PlayerModel(playerInfo).save();
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

export const makePaymentController: RouteController = async (req, res, next) => {
    try {
        const paymentInfo = await new PaypalPaymentsModel(req.body).save();
        res.json(paymentInfo);
    } catch (e) {
        next && next(e);
    }
};

export const getPlayerByIdController: RouteController = async (req, res, next) => {
    try {
        const { playerId } = req.params;
        const playerInfo = await PlayerModel.findById(playerId).populate("paymentId");
        res.json(playerInfo);
    } catch (e) {
        next && next(e);
    }
};

export const addPlayerManuallyController: RouteController = async (req, res, next) => {
    try {
        const { playerInfo } = req.body;
        const created_player = await new PlayerModel(playerInfo).save();
        res.json(created_player);
    } catch (e) {
        next && next();
    }
};

export const deleteSinglePlayerController: RouteController = async (req, res, next) => {
    try {
        const { playerId } = req.params;
        const deletedPlayer = await PlayerModel.findByIdAndDelete(playerId);
        res.json({ deleted: true, ...deletedPlayer });
    } catch (e) {
        next && next();
    }
};
