//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
    name: String,
    branch: String,
    date_of_birth: Date,
    cgpa: Number
});

// Compile model from schema
var StudentModel = mongoose.model('Students',  StudentSchema);

module.exports = StudentModel;
