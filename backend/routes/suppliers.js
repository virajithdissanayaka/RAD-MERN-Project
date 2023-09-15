const express = require('express')

//from controllers
const {
    getSuppliers,
    createSupplier,
    deleteSupplier,
    updateSupplier
} = require('../controllers/suppliercontroller')

const router = express.Router()

//GET all supplier
router.get('/', getSuppliers)

//POST an supplier
router.post('/create/',createSupplier)

//DELETE an supplier
router.delete('/delete/:id', deleteSupplier)

//UPDATE an supplier
router.put('/update', updateSupplier)

module.exports = router