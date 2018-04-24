const User = require('../models/user.js');

module.exports = {
    signUp: async (req, res, next) => {
        //need email & password from user
        // console.log('contents of req.value.body', req.value.body);
        // console.log('usersController.signUp() called!');

        // const email = req.value.body.email;
        // const password = req.value.body.password;
        const { email, password } = req.value.body;
        const newUser = new User({ email, password });

        //save to db
        await newUser.save();

        //show response of saved
        res.json({ 'user': 'created' });
    },

    signIn: async (req, res, next) => {
        //generate token
        // console.log('usersController.signIn() called!');
    },

    secret: async (req, res, next) => {
        //no validation in a get request
        // console.log('usersController.secret() called!');
    }
}