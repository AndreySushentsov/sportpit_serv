var mongoose = requeire('mongoose');
var Programms = require('./models/programms');
var config = require('./config.json');

mongoose.Promise = global.Promise;

//  подключаемся к базе данных
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
  user: config.db.user,
  pass: config.db.password
}).catch(e => {
  console.error(e);
  throw e;
});

var db = mongoose.conection;
db.once('open', function() {
  Programms.create({
    gender:"Тренировки для мужчин",
    sex: "male",
    category:[{
      category_id: "male_cardio",
      category_button: "кардио",
      programm: "<h1>Кардио тренировка для мужиков</h1>"
      },
      {
        category_id: "male_powrefull",
        category_button: "силовая",
        programm: "<h1>Силовая тренировка для мужиков</h1>"
      },
      {
        category_id: "male_fitness",
        category_button: "Аэробная",
        programm: "<h1>Функциональная тренировка для мужиков</h1>"
      }
    ]
  }, function (err, prog) {
    if(err) throw err;
    console.log(prog);
  })
  .create({
    gender:"Тренировки для девушек",
    sex: "female",
    category:[{
      category_id: "female_cardio",
      category_button: "кардио",
      programm: "<h1>Кардио тренировка для девушек.</h1>"
      },
      {
        category_id: "female_powrefull",
        category_button: "силовая",
        programm: "<h1>Силовая тренировка для девушек.</h1>"
      },
      {
        category_id: "female_fitness",
        category_button: "Аэробная",
        programm: "<h1>Функциональная тренировка для девушек.</h1>"
      }
    ]
  }, function (err, prog) {
    if(err) throw err;
    console.log(prog);
  })
  db.close();
})
