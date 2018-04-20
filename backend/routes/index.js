'use strict';

const express = require('express');
const userCtrl = require('../controllers/userController');
const auth = require('../middlewares/auth');
const api = express.Router();

// User API
api.get('/user', userCtrl.getUsers);
api.get('/user/:userId', userCtrl.getUser);
api.post('/user', auth, userCtrl.saveUser);
api.put('/user/:userId', auth, userCtrl.updateUser);
api.delete('/user/:userId', auth, userCtrl.deleteUser);
//SignUp API and SignIn API
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);
// Token Time API
api.get('/private', auth, (req, res) => {
    res.status(200).send({ message: 'Tienes acceso' })
});

module.exports = api;