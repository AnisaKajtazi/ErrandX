const express = require('express');
const router = express.Router();
const UserService = require('../application/userService');

router.post('/', async (req, res) => {
    const user = await UserService.createUser(req.body);
    res.json(user);
});

router.get('/', async (req, res) => {
    const users = await UserService.getAllUsers();
    res.json(users);
});

module.exports = router;
