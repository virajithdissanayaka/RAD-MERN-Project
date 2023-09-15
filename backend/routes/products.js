const express = require('express')

//from controllers
const {
    getProducts,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controllers/productController')

const router = express.Router()

//GET all products
router.get('/', getProducts)

//POST a new product
router.post('/',createProduct)

//DELETE a product
router.delete('/:id', deleteProduct)

//UPDATE a product
router.patch('/:id', updateProduct)

module.exports = router