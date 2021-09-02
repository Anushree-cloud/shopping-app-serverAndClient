const User = require('../model/user')

const login = (req, res) => {
    User.findAll((users) => {
        console.log(users)
        let findUser = users.find((user) => {
            return (user.email === req.body.email) && (user.password === req.body.password) 
        })
        console.log(findUser)
        if(findUser) {
            res.json({
                message: `Welcome Back ${findUser.name}`,
                data: {
                    user: findUser,
                    authCheck: true
                }
            })
        }
        else {
            res.json({
                message: 'Invalid User Name or Password!',
                data: {},
                authCheck: false
            })
        }
    })
}

const logout = (req, res) => {
    res.json({
        message: 'You Logged out!',
        data: {
            authCheck: false
        }
    })
}

module.exports = { login, logout }