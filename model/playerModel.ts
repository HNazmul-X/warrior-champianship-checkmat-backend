import { Schema, model } from "mongoose";

const playerSchema = new Schema(
    {
        package: {
            type: String,
            trim: true,
        },
        beltColor: {
            type: String,
            trim: true,
        },
        gender: {
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
    },
    {
        timestamps: true,
    },
);

const PlayerModel = model("player", playerSchema);
export default PlayerModel;
