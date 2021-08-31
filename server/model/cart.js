const cartItems = require('../database/cartItems.json')
const path = require('path')
const fs = require('fs')

//write file
function save(data, callBack) {
    fs.writeFile('./database/cartItems.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

//read file
function findAll(callBack) {
    fs.readFile(path.join(__dirname, '../database/cartItems.json'), 'utf8', (error, data) => {
        if(error)
            console.log(error);
        let parseData = JSON.parse(data)
        callBack(parseData)
    })
}


module.exports = { save, findAll }
