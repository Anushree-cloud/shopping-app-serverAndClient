const express = require('express')
const cartRouter = express.Router()
const Cart = require('../../controller/cart')

cartRouter.get('/api/cart', Cart.getCartItems)

cartRouter.post('/api/cart', Cart.postItemToCart)

// cartRouter.put('/api/cart/:id', Cart.postItemToCart)

module.exports = cartRouter; 
