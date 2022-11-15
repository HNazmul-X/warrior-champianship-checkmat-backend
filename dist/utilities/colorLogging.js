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
exports.logSuccess = exports.logInfo = void 0;
const chalk_1 = __importDefault(require("chalk"));
const array_to_text = (...arg) => {
    return new Promise((resolve, reject) => {
        try {
            let text = "";
            arg.forEach((value, index) => {
                text += value;
                if (index === arg.length - 1) {
                    resolve(text);
                }
            });
        }
        catch (e) {
            reject(e);
        }
    });
};
function logInfo(...arg) {
    return __awaiter(this, void 0, void 0, function* () {
        // let  = await array_to_text(...arg);
        console.log(chalk_1.default.bgYellow(chalk_1.default.black(...arg)));
    });
}
exports.logInfo = logInfo;
function logSuccess(...arg) {
    console.log(chalk_1.default.whiteBright.bgGreen(...arg));
}
exports.logSuccess = logSuccess;
