const { writeDataToFile, getDataFromFile, findProductById } = require('../model/cart')

//get cartItems
const getCartItems = (req, res) => {
    getDataFromFile((cartItems) => {
        res.json({
            message:'Cart-items fetched successfully.',
            data: cartItems
        })
    })
}

//post data to cart
const postItemToCart = (req, res) => {
    let currentProduct = findProductById(req.params.id)
    getDataFromFile((cartItems) => {
        cartItems.push(currentProduct)
        writeDataToFile( cartItems, () => {
            res.json({
                message: 'Item successfully added to cart.',
                data: cartItems
            })
        })
    })
    
}

module.exports = { getCartItems, postItemToCart }
