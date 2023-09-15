const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    } 
},{ timestamps : true })

module.exports = mongoose.model('branch', BranchSchema)
//"branch" is the dabtabase name in mongodb