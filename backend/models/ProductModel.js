const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    imagelink: {
        type: String,
        required:true
    }    
},{ timestamps: true })

module.exports = mongoose.model('Product', productSchema)
//"Product" is the dabtabase name in mongodb