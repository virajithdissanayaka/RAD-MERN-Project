const express = require('express')

//from controllers
const {
    signUp,
    logIn,
    userData
} = require('../controllers/userDetailcontroller')

const router = express.Router()

router.post('/register',signUp)

router.post('/login-user',logIn)

router.post('/userData',userData)


module.exports = router