const express = require('express');
const router = express.Router();
const TaskService = require('../application/taskService');

router.post('/', async (req, res) => {
    const task = await TaskService.createTask(req.body);
    res.json(task);
});

router.get('/', async (req, res) => {
    const tasks = await TaskService.getAllTasks();
    res.json(tasks);
});

module.exports = router;
