import mongoose from "mongoose";


const connectionDb = async ()=>{

    try {
        
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log(connection)
    } catch (error) {
        console.log("error into db conneciton " , error)

    }
}
export default connectionDb;