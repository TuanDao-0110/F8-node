const express = require('express')
const app = express()
// import engin from express-handlebars
const { engine } = require('express-handlebars');
// import morgan vs use morgan HTTP logger
const morgan = require('morgan')
app.use(morgan('tiny'))
// use express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    // res.status(200).send(`<h1 style='red'>hello world</h1>`)
    res.render('home');

}).listen(3000, () => {
    console.log("listening port 3000 ....")
})