const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/multi-user-task-manager',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
 });
mongoose.Promise = global.Promise;

module.exports = mongoose;