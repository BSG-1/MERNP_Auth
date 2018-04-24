const User = require('../models/user.js');

module.exports = {
    signUp: async (req, res, next) => {
        const { email, password } = req.value.body;
        //need email & password from user
        // console.log('contents of req.value.body', req.value.body);
        // console.log('usersController.signUp() called!');

        //Check if theres a user with the same email (async)
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'Email is already in use' })
        }
        //if that fails, actually create a new user
        const newUser = new User({ email, password });
        //save to db
        await newUser.save();

        //Respond with a token
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