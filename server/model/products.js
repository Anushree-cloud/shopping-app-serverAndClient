const fs = require('fs')
const products = require('../database/Products.json')

// write file
function writeDataToFile(data, callBack){
    fs.writeFile('./database/Products.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

//read file
function getDataFromFile(callBack) {
    fs.readFile('/Products.json', 'utf8', (error, data) => {
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