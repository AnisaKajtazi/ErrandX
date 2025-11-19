const Task = require('../domain/task');

const TaskRepository = {
    create: async (task) => {
        return await Task.create(task);
    },
    findAll: async () => {
        return await Task.findAll();
    },
    findById: async (id) => {
        return await Task.findByPk(id);
    }
};

module.exports = TaskRepository;
