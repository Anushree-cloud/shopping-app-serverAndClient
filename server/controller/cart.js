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
    let currentProduct = Product.findById(req.body.productId)
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

//update cart
const updateCart = (req, res) => {
    let currentProduct = Cart.findById(req.body.productId)
    if(currentProduct){
        let currentProductIndex = Cart.findByIndex(req.body.productId)
        let updatedCartItem = {
            ...currentProduct,
            quantity: req.body.productQty
        }
        Cart.findAll((cartItems) => {
            cartItems[currentProductIndex] = updatedCartItem
            Cart.save(products, () => {
                res.json({
                    message: `product with id ${req.body.productId} is updated`,
                    data: updatedCartItem
                })
            })
        })
    }
    
}

module.exports = { getCartItems, postItemToCart, updateCart }
