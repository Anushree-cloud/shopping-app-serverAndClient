const uuid = require('uuid')
const User = require('../model/user')

// get all users
const getAllUsers = (req, res) => {
    User.findAll((users) => {
        res.json({
            message: `all user details fetched successfully`,
            data: users
        })
    })
}

//get a particular user
const getParticularUser = (req, res) => {
    const currentUser = User.findById(req.params.id)
    if(currentUser){
        res.json({
            message: `User Details with id ${req.params.id} fetched successfully`,
            data: currentUser
        })
    }
    else{
        res.status(400).json({ message: "User not found!" })
    }
}

//create a new user profile
const createUser = (req, res) => {
    const { userName, address, phone, email, password } = req.body
    const newUser = {
        id: uuid.v4(),
        userName,
        address,
        phone,
        email,
        password
    }
    User.findAll((users) => {
        users.push(newUser)
        User.save(users, () => {
            res.json({
                message: `User Details added successfully!`,
                data: newUser
            })
        })
    })
}

//update user details
const updateUser = (req, res) => {
    const currentUser = User.findById(req.params.id)
    if(currentUser){
        let index = User.findByIndex(req.params.id)
        let updatedUser = {
            id: currentUser.id,
            userName: req.body.userName ? req.body.userName : currentUser.userName,
            address: req.body.address ? req.body.address : currentUser.address,
            phone: req.body.phone ? req.body.phone : currentUser.phone,
            email: req.body.email ? req.body.email : currentUser.email,
            password: req.body.password ? req.body.password : currentUser.password
        }
        User.findAll((users) => {
            users[index] = updatedUser
            User.save(users, () => {
                res.json({
                    message: `User Details with id ${req.params.id} is updated`,
                    data: updatedUser
                })
            })
        })
    }
    else{
        res.status(400).json({ msg: "User not found"})
    }
}

// delete User account
const deleteUser = (req, res) => {
    const currentUser = User.findById(req.params.id)
    if(currentUser){
        let index = User.findByIndex(req.params.id)
        User.findAll((users) => {
            users.splice(index, 1)
            User.save(users, () => {
                res.json({
                    message: `User Details with id ${req.params.id} is deleted.`,
                    data: users
                })
            })
        })
        
    }
    else{
        res.status(400).json({ msg: "User Details not found!" })
    }
}

module.exports = { getAllUsers, getParticularUser, createUser, updateUser, deleteUser }



