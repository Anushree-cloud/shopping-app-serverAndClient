const express = require('express')
const orderRouter = express.Router()
const Order = require('../../controller/orders')

orderRouter.get('/api/orders', Order.getAllOrders)

orderRouter.get('/api/orders/:id', Order.getSingleOrder)

orderRouter.post('/api/orders', Order.postItemsInOrders)

module.exports = orderRouter; 