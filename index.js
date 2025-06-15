const exp = require('express')
const app = exp()
const enrutador = require('./router')
require('dotenv').config();

const logger = require('morgan')
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())

app.use('/v1', enrutador);

app.listen(process.env.PORT,( )=>{
    console.log('servidor en linea')
});