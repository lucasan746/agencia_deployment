const express = require ('express');
const routes = require ('./routes');
const bodyParser = require('body-parser');
const path = require('path');
const configs = require('./config');
const db = require('./config/database');
require('dotenv').config({path: 'varibles.env'});

db.authenticate()
    .then(() => console.log('db conectada'))
    .catch(error => console.log(error))

const app = express();

app.use((req,res,next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
});

app.set('view engine','pug');

app.set('views', path.join(__dirname,'./views'));

app.use(express.static('public'));

const config = configs[app.get('env')];

app.locals.titulo = config.nombresitio;

app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes());

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port,host);
