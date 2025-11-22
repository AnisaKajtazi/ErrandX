const User = require('../domain/user');
const bcrypt = require('bcrypt');

const UserRepository = {
    create: async (userData) => {
        userData.password = await bcrypt.hash(userData.password, 10);
        return await User.create(userData);
    },

    findAll: async () => {
        return await User.findAll();
    },

    findById: async (id) => {
        return await User.findByPk(id);
    },

    findByUsername: async (username) => {
        return await User.findOne({ where: { username } });
    },

    update: async (id, data) => {
        const user = await User.findByPk(id);
        if (!user) return null;
        return await user.update(data);
    },

    delete: async (id) => {
        return await User.destroy({ where: { id } });
    },

    login: async (username, password) => {
        const user = await User.findOne({ where: { username } });
        if (!user) return null;

        const match = await bcrypt.compare(password, user.password);
        return match ? user : null;
    }
};

module.exports = UserRepository;
