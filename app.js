const express = require('express')
const app = express()
const morgan = require('morgan')
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    let a = 2
    let b = 2
    let c = 3
    res.status(200).send(`<h1 style='red'>hello world</h1>`)

}).listen(3000, () => {
    console.log("listening port 3000 ....")
})