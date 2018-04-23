const express = require('express');
const router = express.Router;

const UsersController = require('../Controllers/users.js')

router.route('/signup')
    .post(UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(UsersController.secret);


module.exports = router;