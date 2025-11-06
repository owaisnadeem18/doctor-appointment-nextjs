import mongoose from "mongoose";

export default async function connectDB() {
    let connection 

    connection = await mongoose.connect(process.env.MONGO_URL)

}