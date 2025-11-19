const TaskRepository = require('../infrastructure/taskRepository');

const TaskService = {
    createTask: async (taskData) => {
        return await TaskRepository.create(taskData);
    },
    getAllTasks: async () => {
        return await TaskRepository.findAll();
    }
};

module.exports = TaskService;
