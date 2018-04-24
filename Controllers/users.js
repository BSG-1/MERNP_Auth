const JWT = require('jsonwebtoken');
const User = require('../models/user.js');
const { JWT_SECRET } = require('../configuration');

// testing: res.json({ 'user': 'created' });
// JWT takes payload and secret/private string
signToken = user => {
    return JWT.sign({
        iss: 'Bahadur',
        sub: user.id,
        iat: new Date().getTime(), //current time
        exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day ahead
    }, 'JWT_SECRET');
}

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


        //Generate a token
        const token = signToken(newUser);

        //Respond with a token
        res.status(200).json({ token });
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