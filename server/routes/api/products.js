const express = require('express')
const router = express.Router()

const { getAllProducts, getSingleProduct, createProduct, deleteProduct, updateProduct } = require('../../controller/products')


//get all products
router.get('/', getAllProducts)

//get a single product
router.get('/:id', getSingleProduct)

//create a product
router.post('/', createProduct)

//delete a product
router.delete('/:id', deleteProduct)

//update a product
router.put('/:id', updateProduct)


module.exports = router;