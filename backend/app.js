'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const path = require('path');
const app = express();
const api = require('./routes');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'views')));
app.use('/api', api);
app.get('/', (req, res) => {
    res.render('index')
});

module.exports = app;