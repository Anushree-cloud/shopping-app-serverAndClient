const express = require('express')
const router = require('./routes/apiRoutes')

const app = express()


// init Body Parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/products', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})