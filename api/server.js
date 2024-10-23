const express = require('express')
const app = express()
const port = 3006
const cors = require('cors')
const bodyparser = require("body-parser")

const user = require('./model/users')
const Movie = require('./model/Recommendations')
const Recommendations = require('./model/Movise') 
const Gentesc = require('./model/Genres')

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(require("./model/users"))
app.use(require("./model/Recommendations"))
app.use(require("./model/Movise"))
app.use(require("./model/Genres"))

app.get('/a', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})