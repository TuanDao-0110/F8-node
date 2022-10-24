const express = require('express')
const app = express()
const morgan = require('morgan')
morgan('dev')

// app.use(morgan)

app.get('/', (req, res) => {
    let a = 2
    let b = 2
    let c = 3
    res.status(200).send('hello ')

}).listen(3000, () => {
    console.log("listening port 3000 ....")
})