const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT;
// const cors = require('cors')
const router = require('./routes/index')
// napp.use(express.json())

app.use('/', router)

// -> CRUD
app.listen(PORT, () => {
  console.log("Example app listening on port ", PORT)
})