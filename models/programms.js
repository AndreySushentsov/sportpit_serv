var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
  category_id: {type: String, required: true},
  category_button: {type: String, required: true},
  programm: {type: String, required: true}
});
// create a schema
var ProgrammSchema = new Schema({
  gender: {type: String, required: true},
  sex: {type: String, required: true},
  category:[CategorySchema]
});

// the schema is useless so far
// we need to create a model using it
var Programm = mongoose.model('Programm', ProgrammSchema);

// make this available to our users in our Node applications
module.exports = Programm;
