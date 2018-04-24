const mongoose = require('mongoose');
//create shortcut to schema (best practice)
const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
    email: String,
    password: String
});

//create a model
const User = mongoose.model('user', userSchema);

//export the model
module.exports = User;
