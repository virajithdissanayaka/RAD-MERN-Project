const mongoose = require('mongoose')
const Product = require('../models/ProductModel')

//get all products
const getProducts = async (req,res) => {
    const products = await Product.find({}).sort({createdAt: -1})
    //"createdAt: -1" this used to list workouts in decending order(new responses at the top)

    res.status(200).json(products)
}

//enter a new product
const createProduct = async (req,res) => {
    const {name, price, details, imagelink} = req.body

    //add doc to db
    try{
        const product = await Product.create({name, price, details, imagelink})
        res.status(200).json(product)
    }catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a product
const deleteProduct = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})  
    }

    const product = await Product.findOneAndDelete({_id: id})

    //if there is not a  such workout
    if (!product) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(product)
}

//update a product
const updateProduct = async(req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such workout'})  
    }

    const product = await Product.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    //if there is not a  such workout
    if (!product) {
        return res.status(400).json({error: 'No such workout'})
    }

    res.status(200).json(product)
}

module.exports = {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
}