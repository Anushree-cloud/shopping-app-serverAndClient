const uuid = require('uuid')
const Product = require('../model/product')

// get all product
const getAllProducts = (req, res) => {
    Product.findAll((products) => {
        res.json({
            message: `all products fetched successfully`,
            data: products
        })
    })
}


//get a single product
const getSingleProduct = (req, res) => {
    const currentProduct = Product.findById(req.params.id)
    if(currentProduct){
        res.json({
            message: `products with id ${req.params.id} fetched successfully`,
            data: currentProduct
        })
    }
    else{
        res.status(400).json({ message: "product not found!" })
    }
}


//create a new product
const createProduct = (req, res) => {
    const { imgUrl, product_name, price } = req.body
    const newProduct = {
        id: uuid.v4(),
        imgUrl,
        product_name,
        price
    }
    Product.findAll((products) => {
        products.push(newProduct)
        Product.save(products, () => {
            res.json({
                message: `product added successfully`,
                data: newProduct
            })
        })
    })
}


// delete a product
const deleteProduct = (req, res) => {
    const currentProduct = Product.findById(req.params.id)
    if(currentProduct){
        let index = Product.findByIndex(req.params.id)
        Product.findAll((products) => {
            products.splice(index, 1)
            Product.save(products, () => {
                res.json({
                    message: `product with id ${req.params.id} is deleted`,
                    data: products
                })
            })
        })
        
    }
    else{
        res.status(400).json({ msg: "product not found!" })
    }
}


//update a product
const updateProduct = (req, res) => {
    const currentProduct = Product.findById(req.params.id)
    if(currentProduct){
        let index = Product.findByIndex(req.params.id)
        let updatedProduct = {
            id: currentProduct.id,
            imgUrl: req.body.imgUrl ? req.body.imgUrl : currentProduct.imgUrl,
            product_name: req.body.product_name ? req.body.product_name : currentProduct.product_name,
            price: req.body.price ? req.body.price : currentProduct.price
        }
        Product.findAll((products) => {
            products[index] = updatedProduct
            Product.save(products, () => {
                res.json({
                    message: `product with id ${req.params.id} is updated`,
                    data: updatedProduct
                })
            })
        })
        
        
    }
    else{
        res.status(400).json({ msg: "product not found"})
    }
}


module.exports = { getAllProducts, getSingleProduct, createProduct, deleteProduct, updateProduct }