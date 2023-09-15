const mongoose = require('mongoose')
const Branch = require('../models/branch')

//get all employees
const getBranches = async (req,res) => {
    const data = await Branch.find({})
    console.log(req.body)
    //"createdAt: -1" this used to list workouts in decending order(new responses at the top)
    
    res.status(200).json({success : true, data : data})
}

//add a new employee
const createBranch = async (req,res) => {
    const {city, address, mobile} = req.body
    console.log(req.body)
    
    //add doc to db
    try{
        const data = await Branch.create({city, address, mobile})
        await data.save()
        //res.status(200).json(data)
        res.send({success : true, message : "data saved successfully", data : data})
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a employee
const deleteBranch = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such Branch'})  
    }

    const data = await Branch.findOneAndDelete({_id: id})

    //if there is not a  such employee
    if (!data) {
        return res.status(400).json({error: 'No such Branch'})
    }

    //res.status(200).json(employee)
    res.send({success : true, message : "data deleted successfully", data : data})
}

//update a Employee
const updateBranch = async(req,res) => {
    console.log(req.body)
    const { ...rest } = req.body
    const { _id } = req.body
    // console.log(rest)

    if (!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error: 'No such Branch'})  
    }

    const data = await Branch.findOneAndUpdate({_id: _id}, rest)

    //if there is not a  such workout
    if (!data) {
        return res.status(400).json({error: 'No such Branch'})
    }

    //res.status(200).json(employee)
    res.send({success : true, message : "data updated successfully", data : data})
}

module.exports = {
    getBranches,
    createBranch,
    deleteBranch,
    updateBranch
}