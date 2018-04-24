const mongoose = require('mongoose');
//create shortcut to schema (best practice)
const Schema = mongoose.Schema;

//create a schema
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

//methods & functions to do the password validations

//create a model
const User = mongoose.model('user', userSchema);

//export the model
module.exports = User;
