import mongoose from "mongoose";


const connectionDb = async () => {

    try {

        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI environment variable is not defined.");
        }
        const connection = await mongoose.connect(uri);
        console.log("db is connected")
    } catch (error) {
        console.log("error into db conneciton ", error)

    }
}
export default connectionDb;