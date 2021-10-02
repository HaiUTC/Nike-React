import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class UserPending {
    _id!: mongoose.Types.ObjectId

    @prop({required : true})
    firstName!: string

    @prop({required : true})
    lastName!: string

    @prop({required : true})
    email!: string

    @prop({required : true})
    password!: string

    @prop({required : true})
    gender!: string

    @prop({required : true})
    dob!: string

    @prop({default: Date.now, expires : '10m'})
    createdAt : Date
}

export const UserPendingModel = getModelForClass(UserPending)