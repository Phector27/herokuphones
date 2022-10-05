require('./database')
require('dotenv').config()
const cors = require("cors");
const express = require('express')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth.routes')
const phonesRoutes = require('./routes/phones.routes')
const verifyToken = require('./middlewares/validate-token')

const app = express()
const PORT = process.env.PORT || 5005;

app.use(
    cors({
      credentials: true,
      origin: process.env.ORIGIN || "http://localhost:3000",
    })
  )

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/auth', authRoutes)
app.use('/api', verifyToken, phonesRoutes)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})
