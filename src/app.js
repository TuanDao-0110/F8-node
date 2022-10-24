const express = require('express')
const app = express()
const path = require('path')
// import engin from express-handlebars
const hbs = require('express-handlebars')
// import morgan vs use morgan HTTP logger
const morgan = require('morgan')
app.use(morgan('common'))


app.use(express.static(path.resolve(__dirname,'public')))

console.log(path.join(__dirname, './public'))
// use express-handlebars

app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.resolve(__dirname, 'resources/views'));

app.all('/', (req, res) => {
    res.render('home');
})
app.all('/news', (req, res) => {
    res.render('new');
})
app.all('/public',(req,res)=> { 
    res.sendFile(path.resolve(__dirname,'./public/index.html'))
})

app.listen(3000, () => {
    console.log("listening port 3000 ....")
})