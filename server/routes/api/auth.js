const express = require('express')
const authRouter = express.Router()
const Auth = require('../../controller/auth')

authRouter.post('/api/auth/login', Auth.login)

authRouter.get('/api/auth/logout', Auth.logout)

module.exports = authRouter; 