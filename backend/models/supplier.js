const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    } 
},{ timestamps : true })

module.exports = mongoose.model('supplier', SupplierSchema)
//"employee" is the dabtabase name in mongodb