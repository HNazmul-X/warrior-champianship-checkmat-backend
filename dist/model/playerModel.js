"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const playerSchema = new mongoose_1.Schema({
    package: {
        type: String,
        trim: true,
    },
    beltColor: {
        type: String,
        trim: true,
    },
    Gender: {
        type: String,
        trim: true,
    },
    birthDate: Date,
    firstName: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    age: Number,
    phone: {
        type: String,
        trim: true,
    },
    weight: Number,
    jiuJitsuSchoolName: {
        type: String,
        trim: true,
    },
    jiuJitsuProfessorName: {
        type: String,
        trim: true,
    },
}, {
    timestamps: true,
});
const PlayerModel = (0, mongoose_1.model)("player", playerSchema);
exports.default = PlayerModel;
