const fs = require('fs');
const path = require('path');
const products = require('../database/products.json')

// write file
function save(data, callBack){
    fs.writeFile('./database/products.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

//read file
function findAll(callBack) {
    fs.readFile(path.join(__dirname, '../database/products.json'), 'utf8', (error, data) => {
        if(error)
            console.log(error);
        let parseData = JSON.parse(data)
        callBack(parseData)
    })
}

// find a product by id
function findById(id) {
    let currentProduct = products.find((product) => {
        return product.id === id
    })
    return currentProduct
}

function findByIndex(id) {
    let index = products.findIndex((product) => {
        return product.id === id
    })
    return index
}

module.exports = { save, findAll, findById, findByIndex }