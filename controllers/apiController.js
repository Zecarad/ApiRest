const Apimodel = require('../models/apiModel');

const getAllUsers = (req, res) => {
    res.json(Apimodel.getUsers());
}

const getUser = (req, res) => {
    const user = Apimodel.getUserById(parseInt(req.params.id));
    if(!user) {
        return res.status(400).json({ message: "Usuario no encontrado" });
    }
res.json(user)
};

const createUser = (req, res) => {
    const { name, email} = req.body;
    if(!name || !email) {
        return res.status(400).json({ message: "Debe ingresar nombre y email"});
    }
    const newUser = Apimodel.addUsers(name, email);
    res.status(201).json(newUser);
};

module.exports = {getAllUsers, getUser, createUser};