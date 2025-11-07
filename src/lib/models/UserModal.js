import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
    firstName: String ,
    lastName: String ,
    picture: String , 
    role : { type: String , default: "user" , enum: ["user" , "doctor" , "admin" ]} ,
    doctorInfo : {
        experience: Number ,
        gender: String,
        fee: String,
        specialization: String
    }
})

export const userModal = mongoose.models.User || mongoose.model("User" , userSchema)