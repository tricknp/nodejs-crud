var express = require('express');
var router = express.Router();
var model = require('./../model/tasksDAO');
/* GET home page. */
router.get('/', function (req, res) {
  console.log('getting home');

  model.find((function (err, data) {
    if (err) {
      throw err;
    }
    res.render('index', {
      title: 'Express',
      tasks: data
    });
  }));
});

router.post('/add', function (req, res, next) {
  var body = req.body;
  body.status = false;
  model.create(body, function (err, task) {
    if (err) {
      throw err;
    }
    res.redirect('/')
  });
});

router.get('/resetDB', function (req, res, next) {
  model.resetDB(function (err, data) {
    if (err) {
      throw err;
    }
    res.redirect('/')
  });
});

module.exports = router;