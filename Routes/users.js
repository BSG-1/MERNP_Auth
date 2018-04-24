const express = require('express');
const router = require('express-promise-router')();

const { validateBody, schemas } = require('../Helpers/routeHelpers');
const UsersController = require('../Controllers/users.js')

router.route('/signup')
    .post(validateBody(scemas.authSchema), UsersController.signUp));

router.route('/signin')
    .post(UsersController.signIn);

router.route('/secret')
    .get(UsersController.secret);


module.exports = router; 