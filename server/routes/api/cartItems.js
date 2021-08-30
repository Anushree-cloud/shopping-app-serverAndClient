const express = require('express')
const router = express.Router()
const { getCartItem, postItemToCart } = require('../../controller/cartItems')

router.get('/cart', getCartItem)

router.post('/cart', postItemToCart)

module.exports = router;
