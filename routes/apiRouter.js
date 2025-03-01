const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/users', apiController.getAllUsers);
router.get('/user/:id', apiController.getUser);
router.post('/users', apiController.createUser);

module.exports =  router;