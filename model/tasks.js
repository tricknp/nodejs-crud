module.exports = function(){
    var db = require('./../libs/db_connect')();
    var Schema = require ('mongoose').Schema;

    var task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return db.model('tasks', task);
}