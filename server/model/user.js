const fs = require('fs');
const path = require('path');
const users = require('../database/users.json')

// write file
function save(data, callBack){
    fs.writeFile('./database/users.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

//read file
function findAll(callBack) {
    fs.readFile(path.join(__dirname, '../database/users.json'), 'utf8', (error, data) => {
        if(error)
            console.log(error);
        let parseData = JSON.parse(data)
        callBack(parseData)
    })
}

// find user by id
function findById(id) {
    let currentUser = users.find((user) => {
        return user.id === id
    })
    return currentUser
}

function findByIndex(id) {
    let index = users.findIndex((user) => {
        return user.id === id
    })
    return index
}

module.exports = { save, findAll, findById, findByIndex }