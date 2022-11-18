import { Schema, model } from "mongoose";

const playerSchema = new Schema(
    {
        package: {
            type: String,
            trim: true,
            required: true,
        },
        beltColor: {
            type: String,
            trim: true,
            required: true,
        },
        gender: {
            type: String,
            trim: true,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        firstName: {
            type: String,
            trim: true,
            required: true,
        },
        lastName: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
        jiuJitsuSchoolName: {
            type: String,
            trim: true,
            required: true,
        },
        jiuJitsuProfessorName: {
            type: String,
            trim: true,
            required: true,
        },
        paymentId: {
            type: Schema.Types.ObjectId,
            ref: "paypal-payments",
        },
    },
    {
        timestamps: true,
    },
);

const PlayerModel = model("player", playerSchema);
export default PlayerModel;
