'use strict';

const User = require('../models/userModel');
const service = require('../services');

function signUp(req, res) {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    user.save((err) => {
        if (err) return res.status(500).send({message: `Error al crear el usuario: ${err}`});

        return res.status(201).send({token: service.createToken(user)});
    })
}

function signIn(req, res) {
    User.find({email: req.body.email}, (err, user) => {
        if (err) return res.status(500).send({message: err});
        if (!user) return res.status(404).send({message: 'No existe el usuario'});

        req.user = user;
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        });
    })
}

function getUser(req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticiion.`, error: `${err}`});
        if (!user) return res.status(404).send({message: `El user no existe.`, error: `${err}`});

        res.status(200).send({user});
    });
}

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send({message: `Error al realizar la peticion.`, error: `${err}`});
        if (!users) return res.status(404).send({message: `No existe users`, error: `${err}`});

        res.status(200).send(users);
    })
}

function saveUser(req, res) {
    console.log(' POST /api/user');
    console.log(req.body);

    let user = new User();
    user.name = req.body.name;

    user.save((err, userStored) => {
        if (err) res.status(500).send({message: `Error al salvar en la base de datos.`, error: `${err}`});

        res.status(200).send({user: userStored});
    })
}

function updateUser(req, res) {
    let userId = req.params.userId;
    let update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) res.status(500).send({message: `Error al actualizar el user.`, error: `${err}`});

        res.status(200).send({user: userUpdated});
    });
}

function deleteUser(req, res) {
    let userId = req.params.userId;

    User.findById(userId, (err) => {
        if (err) res.status(500).send({message: `Error al borrar el user.`, error: `${err}`});

        res.status(200).send({message: "El user ha sido eliminado."});
    })
}

module.exports = {
    signUp,
    signIn,
    getUser,
    deleteUser,
    getUsers,
    saveUser,
    updateUser
};