const express = require('express')
const app = express()
const path = require('path')
// import engin from express-handlebars
const hbs = require('express-handlebars')
// import morgan vs use morgan HTTP logger
const morgan = require('morgan')
app.use(morgan('tiny'))
// use express-handlebars

app.use(express.static('../public'))
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, './resources/public/index.html'))
})
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(3000, () => {
    console.log("listening port 3000 ....")
})