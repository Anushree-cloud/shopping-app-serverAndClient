const User = require('../model/user')
const Auth = require('../model/auth')

const login = (req, res) => {
    User.findAll((users) => {
        console.log(users)
        let findUser = users.find((user) => {
            (user.email === req.body.email) && (user.password === req.body.password) 
        })
        console.log(findUser);
        if(findUser) {
            Auth.save(findUser, () => {
                res.json({
                    message: `Welcome Back ${findUser.name}`,
                    data: findUser,
                    authCheck: true
                })
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
        message: 'You Logged out!'
    })
}

module.exports = { login, logout }