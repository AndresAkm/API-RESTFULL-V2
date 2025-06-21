const mongoose = require('mongoose');
require('dotenv').config();

const USER_DB = process.env.USER_DB || "jaym3gd2431"
const PASS_DB = process.env.PASS_DB || "5312466211aA_"
const NAME_DB = process.env.NAME_DB || "API441"


// Colocar base de datos creada en mongo y las variables de entorno

const URI = `mongodb+srv://${USER_DB}:${PASS_DB}@cluster0.guvuz2o.mongodb.net/${NAME_DB}`
             
mongoose.connect(URI);

module.exports = mongoose;