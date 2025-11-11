import mongoose from "mongoose";
import "dotenv/config";
export default function db() {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("MongoDB Connected Successfully");
    }).catch(err => console.log(err));
}