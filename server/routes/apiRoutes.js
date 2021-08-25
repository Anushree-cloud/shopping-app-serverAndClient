const products = require("../Products.json")
const express = require('express')
const fs = require('fs')
const uuid = require('uuid')
const router = express.Router()


// write file
function writeDataToFile(data){
    fs.writeFile('./Products.json', JSON.stringify(data), (error) => {
        if(error){
            console.log(error);
        }
    })
}

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
    writeDataToFile(products)
    res.json(products)
})

//delete a product
router.delete('/:id', (req, res) => {
    const currentProduct = products.find((product) => {
        return product.id === req.params.id
    })
    if(currentProduct){
        let index = products.findIndex((product) => {
            return product.id === req.params.id
        })
        products.splice(index, 1)
        res.json({ 
            msg: `product with the id ${req.params.id} is deleted`,
            products
        })
        writeDataToFile(products)
    }
    else{
        res.status(400).json({ msg: "product not found!" })
    }
})

//update a product
router.put('/:id', (req, res) => {
    let currentProduct = products.find((product) => {
        return product.id === req.params.id
    })
    if(currentProduct){
        let index = products.findIndex((product) => {
            return product.id === req.params.id
        })
        let updatedProduct = {
            id: currentProduct.id,
            imgUrl: req.body.imgUrl ? req.body.imgUrl : currentProduct.imgUrl,
            product_name: req.body.product_name ? req.body.product_name : currentProduct.product_name,
            price: req.body.price ? req.body.price : currentProduct.price
        }
        products[index] = updatedProduct
        res.json({
            msg: `product with id ${req.params.id} is updated`,
            products
        })
        writeDataToFile(products)
    }
    else{
        res.status(400).json({ msg: "product not found"})
    }
})


module.exports = router;