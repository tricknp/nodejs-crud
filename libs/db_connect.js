var mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://127.0.0.1:27017');
    var db = mongoose.connection;

    db.once('open', function () {
        console.log('connectado');
    });

    return mongoose;
}