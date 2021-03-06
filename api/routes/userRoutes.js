const express = require('express');
const User = require('../models/UserSchema');
const userController = require('../controllers/userController');
const authCheck = require('../middleware/authCheck');

const router = express.Router();


router.get('/users', authCheck, userController.users_get_all);

router.post('/signup',  userController.users_signup);

router.post('/login', userController.user_login);

router.put('/profileUpdate', authCheck, userController.update_user)

router.put('/updatePassword', authCheck, userController.update_password)

module.exports = router;
