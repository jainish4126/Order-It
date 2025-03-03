import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://pateljainish2021:98791760@cluster0.ut3te.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}