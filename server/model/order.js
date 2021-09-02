const orders = require('../database/orders.json')
const fs = require('fs')
const path = require('path')

function findAll(callBack) {
    fs.readFile(path.join(__dirname, '../database/orders.json'), 'utf8', (error, data) => {
        if(error)
            console.log(error);
        let parseData = JSON.parse(data)
        callBack(parseData)
    })
}

function save(data, callBack) {
    fs.writeFile('./database/orders.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
} 

module.exports = { save, findAll }

