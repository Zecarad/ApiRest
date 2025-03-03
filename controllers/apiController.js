const apiModel = require('../models/apiModel');

const getAllUsers = (req, res) => {
    res.json(apiModel.getUsers());
}

const getUsersById = (req, res) => {
    const user = apiModel.getUsersById(parseInt(req.params.id));
    if(!user) {
        return res.status(400).json({ message: "No se encontro" });
    }
    res.json(user);
}

const addUsers = (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) {
        res.status(400).json({ message: "No se encontraron los datos"});
    }
    const newUser = apiModel.addUsers(name, email);
    res.status(201).json(newUser);
}
const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const deleteUser = apiModel.deleteUser(userId);
    if(!deleteUser) {
        return res.status(400).json({ message: "No se encontro usuario"})
    }
    res.status(200).json({ message: "Se borro"});
}

module.exports = { getAllUsers, getUsersById, addUsers, deleteUser}