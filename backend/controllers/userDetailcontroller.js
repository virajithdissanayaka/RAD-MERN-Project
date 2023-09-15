const express = require("express");
const app = express()
const mongoose = require("mongoose")
const cors= require("cors")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
require('../models/userDetail')

const JWT_SECRET= "vvdtrdvhjnk2656652f4t3)(Rrffvfgg8b2484841cr34frfvv4vbrb4g4"
//this is a random key entered by me

const User= mongoose.model("UserInfo")

//SIGNUP API
const signUp = async (req,res) => {
    const {fname,lname,email,password,userType} =  req.body

    const encryptedPassword = await bcrypt.hash(password, 10)
    try{
        const oldUser= await User.findOne({email})

        if(oldUser){
          return res.send({ error:"User Exists" })  
        }
        await User.create({
            fname,
            lname,
            email,
            password:encryptedPassword,
            userType
        });
        res.send({status:"ok"})
    } catch (error) {
        res.send({status:"error"})
    }  
}

//LOGIN API
const logIn = async (req,res) =>{
    const { email, password } = req.body

    const user=await User.findOne({email})
    if(!user){
        return res.send({ error:"User Not Found" })  
    }
    if(await bcrypt.compare(password, user.password)){
        const token=jwt.sign({email:user.email}, JWT_SECRET, {
            expiresIn: "15m"
        })

        if(res.status(201)){
            return res.json({status:"ok", data:token, type:user.userType})
        }  else {
            return res.json({error:"error"})
        }
    }
   
    res.json({status:"error",error:"Invalid Password"})
}

//USER DATA API
const userData = async (req,res) => {
    const {token}=req.body 
   try {
    const user=jwt.verify(token,JWT_SECRET,(err,res)=>{
        if(err){
            return "token expired"
        }
        return res
    })
    console.log(user)
    if(user=="token expired"){
        return res.send({status: "error",data:"token expired"}) 
    }
    const useremail = user.email
    User.findOne({email:useremail}).then((data)=>{
       res.send({status: "ok",data:data}) 
    }).catch((error)=>{
        res.send({ status: "error", data:error})
    })
   }catch(error){
    res.send({status:"error"})
   }
}

module.exports = {
    signUp,
    logIn,
    userData
}
