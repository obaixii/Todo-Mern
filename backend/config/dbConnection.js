import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/todos', (con) => {
        console.log(`\x1b[33mDatabase Connected Successfully ${con}\x1b[0m`);
    })
}
export default connectDB; 