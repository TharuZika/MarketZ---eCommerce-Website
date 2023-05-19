import { Document, Schema, model } from "mongoose";

export interface ICustomer extends Document {
    userName: string;
    email: string;
    password: string;
}

const CustomerSchema = new Schema({
    userName: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
},
{timestamps: true}
);

export const Customer = model<ICustomer>("Customer", CustomerSchema);