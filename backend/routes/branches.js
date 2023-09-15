const express = require('express')

//from controllers
const {
    getBranches,
    createBranch,
    deleteBranch,
    updateBranch
} = require('../controllers/branchcontroller')

const router = express.Router()

//GET all employees
router.get('/', getBranches)

//POST an employee
router.post('/create/', createBranch)

//DELETE an employee
router.delete('/delete/:id', deleteBranch)

//UPDATE an employee
router.put('/update', updateBranch)

module.exports = router