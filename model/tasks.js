module.exports = function () {
    var db = require('./../libs/database_connect')();
    var Schema = require('mongoose').Schema;

    var task = Schema({
        title: String,
        description: String,
        staus: Boolean
    });

    return db.model('tasks', task);
}