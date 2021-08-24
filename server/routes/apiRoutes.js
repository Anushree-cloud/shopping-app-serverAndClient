const products = require('../Products')
const express = require('express')
const uuid = require('uuid')
const router = express.Router()

//get all products
router.get('/', (req, res) => {
    res.json(products)
})

//get a single product
router.get('/:id', (req, res) => {
    const currentProduct = products.find((product) => {
        return product.id === parseInt(req.params.id)
    })
    if(currentProduct){
        res.json(currentProduct)
    }
    else{
        res.status(400).json({ msg: "product not found!" })
    }
})

//create a product
router.post('/', (req, res) => {
    const newProduct = {
        id: uuid.v4(),
        ...req.body,
    }
    products.push(newProduct)
    res.json(products)
})

//delete a product
router.delete('/:id', (req, res) => {
    const currentProduct = products.some((product) => {
        return product.id === parseInt(req.params.id)
    })
    if(currentProduct){
        res.json({ 
            msg: `product with the id ${req.params.id} is deleted`,
            products: products.filter((product) => product.id !== parseInt(req.params.id))
        })
    }
    else{
        res.status(400).json({ msg: "product not found!" })
    }
})

//update a product
router.put('/:id', (req, res) => {
    let currentProduct = products.some((product) => {
        return product.id === parseInt(req.params.id)
    })
    if(currentProduct){
        const updatedProduct = req.body
        products.forEach((product) => {
            if(product.id === parseInt(req.params.id)){
                product.name = updatedProduct.name ? updatedProduct.name : product.name
                product.email = updatedProduct.email ? updatedProduct.email : product.email
            }
            res.json({ msg: 'product updated!', product})
        })
        
    }
})


module.exports = router;