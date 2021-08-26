const express = require('express')
const cors = require('cors')
const router = require('./routes/api/products')

const app = express()

//init cross origin resourse sharing(cors) middleware
app.use(cors())


// init Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/products', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})