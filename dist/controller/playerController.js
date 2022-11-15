"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOnePlayerController = exports.getAllPlayerController = exports.registerNewPlayerController = void 0;
const playerModel_1 = __importDefault(require("../model/playerModel"));
const registerNewPlayerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const player = yield new playerModel_1.default(req.body).save();
        res.json(player);
    }
    catch (e) {
        next && next(e);
    }
});
exports.registerNewPlayerController = registerNewPlayerController;
const getAllPlayerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allPlayer = yield playerModel_1.default.find({});
        res.json(allPlayer);
    }
    catch (e) {
        next && next(e);
    }
});
exports.getAllPlayerController = getAllPlayerController;
const deleteOnePlayerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { playerId } = req.params;
        const deleted = yield playerModel_1.default.findByIdAndDelete(playerId);
        res.json(deleted);
    }
    catch (e) {
        next && next();
    }
});
exports.deleteOnePlayerController = deleteOnePlayerController;
