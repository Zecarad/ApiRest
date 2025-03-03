const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.getAllUsers);
router.get('/users/:id', apiController.getUsersById);
router.post('/users', apiController.addUsers);
router.delete('/users/delete/:id', apiController.deleteUser);

module.exports =  router;