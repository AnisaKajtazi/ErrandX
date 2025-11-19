const UserRepository = require('../infrastructure/userRepository');

const UserService = {
    createUser: async (userData) => {
        return await UserRepository.create(userData);
    },
    getAllUsers: async () => {
        return await UserRepository.findAll();
    }
};

module.exports = UserService;
