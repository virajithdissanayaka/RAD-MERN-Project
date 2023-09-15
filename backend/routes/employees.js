const express = require('express')

//from controllers
const {
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeecontroller')

const router = express.Router()

//GET all employees
router.get('/', getEmployees)

//POST an employee
router.post('/create/',createEmployee)

//DELETE an employee
router.delete('/delete/:id', deleteEmployee)

//UPDATE an employee
router.put('/update', updateEmployee)

module.exports = router