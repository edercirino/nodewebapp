const express = require('express')
const PORT = 3000
const HOST = '0.0.0.0'
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

//config
  //handlebars
    app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
    app.set('view engine', 'handlebars')
  //body-parser
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json())

//----------ROUTES BELOW-------------------------
app.get('/', (req, res) => {
  res.render('home')
})
//----------ROUTES ABOVE-------------------------

app.listen(PORT, HOST)