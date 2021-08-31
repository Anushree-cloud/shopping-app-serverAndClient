const express = require('express')
const productRouter = express.Router()

const Product = require('../../controller/products')


//get all products
productRouter.get('/api/products/', Product.getAllProducts)

//get a single product
productRouter.get('/api/products/:id', Product.getSingleProduct )

//create a product
productRouter.post('/api/products/', Product.createProduct )

//delete a product
productRouter.delete('/api/products/:id', Product.deleteProduct )

//update a product
productRouter.put('/api/products/:id', Product.updateProduct )


module.exports = productRouter;