var db_connect = require('../libs/db_connect');

var mongoose = db_connect();

var taskSchema = mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
});

var TaskModel = mongoose.model('Task', taskSchema);

function create(body, callback) {
    console.log('criando task');
    var task = new TaskModel({
        title: body.title,
        description: body.description,
        status: body.status
    });

    task.save(function (err, task) {
        if (err) return callback(err, null);
        console.log('task cadastrada no db.');
        console.log('chamando callback com a task ressem cadastrada...');
        callback(null, task);
    });

}

function find(callback) {
    TaskModel.find((err, data) => {
        if (err) return callback(err, null);
        console.log('listando as tasks...');
        console.log(data);
        console.log('chamando o callback e mandando as tasks como argumento...');        
        callback(null, data);
    })
}

function resetDB(callback) {
    TaskModel.deleteMany((err, data) => {
        if (err) return callback(err, null);
        callback(null, data);
    });
}

exports.create = create;
exports.find = find;
exports.resetDB = resetDB;