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
    console.log(currentProduct);
    let currentProductInCart = Cart.findById(req.body.productId)

    if(currentProductInCart){
        let currentProductInCartIndex = Cart.findByIndex(req.body.productId)
        Cart.findAll((cartItems) => {
            cartItems[currentProductInCartIndex] = {
                ...cartItems[currentProductInCartIndex],
                quantity: (currentProductInCart.quantity) + 1
            }
            Cart.save(cartItems, () => {
                res.json({
                    message: `product with id ${req.body.productId} is updated`,
                    data: cartItems[currentProductInCartIndex]
                })
            })
        })
    }
    else {
        Cart.findAll((cartItems) => {
            cartItems.push({...currentProduct, quantity: 1})
            Cart.save(cartItems, () => {
                res.json({
                    message: 'Item successfully added to cart.',
                    data: cartItems
                })
            })
        })
    }
}

//delete from Cart
const deleteFromCart = (req, res) => {
    let currentProductIndex = Cart.findByIndex(req.params.id)
    Cart.findAll((cartItems) => {
        cartItems.splice(currentProductIndex, 1)
        Cart.save(cartItems, () => {
            res.json({
                message: `Item successfully deleted with id ${req.params.id}`,
                data: cartItems
            })
        })
    })
}

module.exports = { getCartItems, postItemToCart, deleteFromCart }
