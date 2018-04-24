const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');

const { validateBody, schemas } = require('../Helpers/routeHelpers');
const UsersController = require('../Controllers/users.js')

router.route('/signup')
    .post(validateBody(schemas.authSchema), UsersController.signUp);

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(passport.authenticate('jwt', { session: true }), UsersController.secret);

//calling the token now, bc we are actually logged in and we want to access the route


module.exports = router; 