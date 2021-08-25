const products = require('../database/Products.json')
const uuid = require('uuid')
const { writeDataToFile, getDataFromFile, findProductById } = require('../model/product')

// get all product
const getAllProducts = (req, res) => {
    getDataFromFile((data) => {
        res.json({
            message: `all products fetched successfully`,
            data: data
        })
    })
}


//get a single product
const getSingleProduct = (req, res) => {
    const currentProduct = findProductById(req.params.id)
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
}


//create a new product
const createProduct = (req, res) => {
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
}


// delete a product
const deleteProduct = (req, res) => {
    const currentProduct = findProductById(req.params.id)
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
}


//update a product
const updateProduct = (req, res) => {
    const currentProduct = findProductById(req.params.id)
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
}


module.exports = { getAllProducts, getSingleProduct, createProduct, deleteProduct, updateProduct }