const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/api/products')
const cartRouter = require('./routes/api/cartItems')
const orderRouter = require('./routes/api/orders')
const userRouter = require('./routes/api/users')
const authRouter = require('./routes/api/auth')

const app = express()

//init cross origin resourse sharing(cors) middleware
app.use(cors())


// init Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use(productRouter)
app.use(cartRouter)
app.use(orderRouter)
app.use(userRouter)
app.use(authRouter)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})