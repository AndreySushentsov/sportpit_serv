// подключаем основные модули
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const server = http.createServer(app);
const config = require('./config.json');
// подключаем Mongoose
const mongoose = require('mongoose');

// заменяем родные промисы на промисы ноды
mongoose.Promise = global.Promise;

//  подключаемся к базе данных
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
  user: config.db.user,
  pass: config.db.password
}).catch(e => {
  console.error(e);
  throw e;
});

// models
require('./models/programms');

// непонятно
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// настраиваем логгер и парсинг данных
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//статика
app.use(express.static(path.join(__dirname, './public')));

// роуты
app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/programms', require('./routes/programms'));
app.use('/products', require('./routes/goods'));
app.use('/contacts', require('./routes/contacts'));

// запускаем сервер
app.listen(3000, function () {
  console.log("Сервер слушает на порту 3000.");
})
