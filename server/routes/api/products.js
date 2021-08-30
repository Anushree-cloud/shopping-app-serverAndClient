const express = require('express')
const router = express.Router()

const { getAllProducts, getSingleProduct, createProduct, deleteProduct, updateProduct } = require('../../controller/products')


//get all products
router.get('/api/products/', getAllProducts)

//get a single product
router.get('/api/products/:id', getSingleProduct)

//create a product
router.post('/api/products/', createProduct)

//delete a product
router.delete('/api/products/:id', deleteProduct)

//update a product
router.put('/api/products/:id', updateProduct)


module.exports = router;