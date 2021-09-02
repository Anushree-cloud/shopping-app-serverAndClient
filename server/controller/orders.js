const Cart = require('../model/cart')
const Order = require('../model/order')
const uuid = require('uuid')

const getOrders = (req, res) => {
    Order.findAll((orders) => {
        res.json({
            message: 'All orders fetched successfully',
            data: orders      
        })
    })
}

const postItemsInOrders = (req, res) => {
    const { name, address, phone } = req.body
    let newUser = {
        orderId: uuid.v4(),
        name,
        address,
        phone
    }
    Order.findAll((orders) =>{
        Cart.findAll((cartItems) => {
            orders.push({
                ...newUser,
                orderItems: cartItems
            })
            Cart.save([])
            Order.save(orders, () => {
                res.json({
                    message: 'Cart Items Added to  orders',
                    data: orders
                })
            })
        })
    }) 
}

module.exports = { getOrders, postItemsInOrders }