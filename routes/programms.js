const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function(req, res) {
  let obj = {};
  const Model = mongoose.model('Programm');

  Model.find().then(items => {
    Object.assign(obj, {programm: items});
    res.render('pages/views/programms', obj);
  });

});


module.exports = router;
