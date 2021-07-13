
require("dotenv").config();
const mongoose=require("mongoose");
export function getConnection()
{
    const MONGO_URI=process.env.MONGO_URI;
    mongoose.connect(MONGO_URI, {useNewUrlParser:true}, ()=>
    {
        console.log("connected to DB")
    })
    return mongoose;

}