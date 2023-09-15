require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
// const bcrypt=require("bcryptjs")
// const jwt=require("jsonwebtoken")
const workoutRoutes = require('./routes/workouts')
const productRoutes = require('./routes/products')
const employeeRoutes = require('./routes/employees')
const userDetailsRoutes = require('./routes/userDetails')
const branchRoutes = require('./routes/branches')
const supplierRoutes = require('./routes/suppliers')

//express app
const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/products', productRoutes)
app.use('/employees', employeeRoutes)
app.use('/branches', branchRoutes)
app.use('/api/', userDetailsRoutes)
app.use('/supplier', supplierRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
     console.log('connected to db & listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

