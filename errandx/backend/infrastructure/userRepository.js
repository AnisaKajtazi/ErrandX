const UserRepository = {
    create: async (user) => {
        return await User.create(user);
    },
    findAll: async () => {
        return await User.findAll();
    },
    findById: async (id) => {
        return await User.findByPk(id);
    }
};

module.exports = UserRepository;