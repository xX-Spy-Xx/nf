const express = require('express')
const app = express()
const port = 3006
const cors = require('cors')
const bodyparser = require("body-parser")

const user = require('./control/user')
const Genres = require('./control/Genres')
const Movie = require('./control/Movie')
const Recommendatiobs = require('./control/Recommendatiobs')

app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(user)
app.use(Genres)
app.use(Movie)
app.use(Recommendatiobs)


app.get('/a', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})