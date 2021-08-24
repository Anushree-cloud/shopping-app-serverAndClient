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
        return product.id === req.params.id
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
    const currentProduct = products.find((product) => {
        return product.id === req.params.id
    })
    if(currentProduct){
        res.json({ 
            msg: `product with the id ${req.params.id} is deleted`,
            products: products.filter((product) => product.id !== req.params.id)
        })
    }
    else{
        res.status(400).json({ msg: "product not found!" })
    }
})

//update a product
router.put('/:id', (req, res) => {
    let currentProduct = products.find((product) => {
        return product.id === parseInt(req.params.id)
    })
    if(currentProduct){
        let updatedProduct = {
            id: currentProduct.id,
            imgUrl: req.body.imgUrl ? req.body.imgUrl : currentProduct.imgUrl,
            product_name: req.body.product_name ? req.body.product_name : currentProduct.product_name,
            price: req.body.price ? req.body.price : currentProduct.price
        }
        res.json({
            msg: `product with id ${req.params.id} is updated`,
            products: products.splice(products.indexOf(currentProduct), 1, updatedProduct)
        })
    }
    else{
        res.status(400).json({ msg: "product not found"})
    }
})


module.exports = router;