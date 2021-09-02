const fs = require('fs')

//write file
function save(data, callBack) {
    fs.writeFile('./database/authUsers.json', JSON.stringify(data), (error) => {
        if(error)
            console.log(error);
        callBack()
    })
}

module.exports = { save }