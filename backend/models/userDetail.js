const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserDetailsSchema = new Schema(
    {
        fname: {
            type:String,
            require:true
        },
        lname:{
            type:String,
            require:true
        },
        email: {
            type:String,
            unique:true,
            require:true
        },
        password:{
            type:String,
            require:true
        },
        userType:{
            type:String
        }
    }
);

module.exports = mongoose.model("UserInfo", UserDetailsSchema)