const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.status(200).send('hello ')

}).listen(3000, () => {
    console.log("listening port 3000 ....")
})