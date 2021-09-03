const express = require('express')
const userRouter = express.Router()

const User = require('../../controller/users')


//get all users
userRouter.get('/api/users', User.getAllUsers)

//get particular user-details
userRouter.get('/api/users/:id', User.getParticularUser )

//create use-details
userRouter.post('/api/users', User.createUser )

//delete user-details
userRouter.delete('/api/users/:id', User.deleteUser )

//update user-details
userRouter.put('/api/users/:id', User.updateUser )


module.exports = userRouter;