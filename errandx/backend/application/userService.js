const UserRepository = require('../infrastructure/userRepository');

const UserService = {
    createUser: async (userData) => {
        return await UserRepository.create(userData);
    },

    getAllUsers: async () => {
        return await UserRepository.findAll();
    },

    getUserById: async (id) => {
        return await UserRepository.findById(id);
    },

    getUserByUsername: async (username) => {
        return await UserRepository.findByUsername(username);
    },

    updateUser: async (id, data) => {
        return await UserRepository.update(id, data);
    },

    deleteUser: async (id) => {
        return await UserRepository.delete(id);
    },

    loginUser: async (username, password) => {
        return await UserRepository.login(username, password);
    }
};

module.exports = UserService;
