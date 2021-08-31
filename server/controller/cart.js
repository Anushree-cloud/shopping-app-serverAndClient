const Cart = require('../model/cart')
const Product = require('../model/product')
//get cartItems
const getCartItems = (req, res) => {
    Cart.findAll((cartItems) => {
        res.json({
            message:'Cart-items fetched successfully.',
            data: cartItems
        })
    })
}

//post data to cart
const postItemToCart = (req, res) => {
    let currentProduct = Product.findById(req.params.id)
    Cart.findAll((cartItems) => {
        cartItems.push(currentProduct)
        Cart.save( cartItems, () => {
            res.json({
                message: 'Item successfully added to cart.',
                data: cartItems
            })
        })
    })
    
}

module.exports = { getCartItems, postItemToCart }
