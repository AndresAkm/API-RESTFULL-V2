const mongoose = require('mongoose');
require('dotenv').config();

// Colocar base de datos creada en mongo y las variables de entorno

const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.guvuz2o.mongodb.net/${process.env.NAME_DB}`
             
mongoose.connect(URI);

module.exports = mongoose;