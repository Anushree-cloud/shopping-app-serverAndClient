const Cart = require('../model/cart')
const Order = require('../model/order')
const uuid = require('uuid')

const getAllOrders = (req, res) => {
    Order.findAll((orders) => {
        res.json({
            message: 'All orders fetched successfully',
            data: orders      
        })
    })
}

const getSingleOrder = (req, res) => {
    let currentOrder = Order.findById(req.params.id)
    if(currentOrder){
        res.json({
            message: `Order with id ${req.params.id} fetched successfully`,
            data: currentOrder
        })
    }
    else {
        res.status(400).json({ message: "Order not found!" })
    }
}

const postItemsInOrders = (req, res) => {
    const { name, address, phone, email } = req.body
    let newUser = {
        orderId: uuid.v4(),
        name,
        address,
        phone,
        email
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

module.exports = { getAllOrders, getSingleOrder, postItemsInOrders }