const products = require("../Products.json")
const express = require('express')
const fs = require('fs')
const uuid = require('uuid')
const router = express.Router()


// write file
function writeDataToFile(data, callBack){
    fs.writeFile('./Products.json', JSON.stringify(data), (error) => {
        if(error){
            console.log(error);
        }
        callBack()
    })
}

//get all products
router.get('/', (req, res) => {
    writeDataToFile(products, () => {
        res.json({
            message: `all products fetched successfully`,
            data: products
        })
    })
})

//get a single product
router.get('/:id', (req, res) => {
    const currentProduct = products.find((product) => {
        return product.id === req.params.id
    })
    if(currentProduct){
        writeDataToFile(products, () => {
            res.json({
                message: `product with id ${req.params.id} is found`,
                data: currentProduct
            })
        })
    }
    else{
        res.status(400).json({ message: "product not found!" })
    }
})

//create a product
router.post('/', (req, res) => {
    const newProduct = {
        id: uuid.v4(),
        ...req.body,
    }
    products.push(newProduct)
    writeDataToFile(products, () => {
        res.json({
            message: `product added successfully`,
            data: newProduct
        })
    })
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
        writeDataToFile(products, () => {
            res.json({
                message: `product with id ${req.params.id} is deleted`,
                data: {}
            })
        })
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
        writeDataToFile(products, () => {
            res.json({
                message: `product with id ${req.params.id} is updated`,
                data: updatedProduct
            })
        })
        
    }
    else{
        res.status(400).json({ msg: "product not found"})
    }
})


module.exports = router;