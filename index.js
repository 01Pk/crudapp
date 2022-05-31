const express = require('express')
const exphbs = require('express-handlebars')
const Handlebars = require("handlebars");
const db = require('./models/db')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const app = express()

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.urlencoded({extended:true}))//get the data from the body or post data of the form
app.use('/',require('./controllers/employeeController'))

const PORT = 3000
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))