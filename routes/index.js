var express = require('express');
var router = express.Router();
var model = require('./../model/tasks')();
/* GET home page. */
router.get('/', function(req, res) {
  model.find().toArray(function(err, tasks){
    if(err){
      throw err;
    }
  });
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next){
  var body = req.body;
  body.status = false;
  model.create(body, function(err, task){
    if(err){
      throw err;
    }    
    res.redirect('/')
  });
});

module.exports = router;
