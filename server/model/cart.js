const cartItems = require('../database/cartItems.json')
const products = require('../database/products.json')
const path = require('path')
const fs = require('fs')

//write file
function writeDataToFile(data, callback) {
    fs.writeFile('./database/cartItems.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

//read file
function getDataFromFile(callBack) {
    fs.readFile(path.join(__dirname, '../database/cartItems.json'), 'utf8', (error, data) => {
        if(error)
            console.log(error);
        let parseData = JSON.parse(data)
        callBack(parseData)
    })
}

// find a product by id
function findProductById(id) {
    let currentProduct = products.find((product) => {
        return product.id === id
    })
    return currentProduct
}

module.exports = { writeDataToFile, getDataFromFile, findProductById }
