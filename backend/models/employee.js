const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
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

module.exports = mongoose.model('employee', EmployeeSchema)
//"employee" is the dabtabase name in mongodb