const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/db');

const Task = sequelize.define('Task', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    deadline: DataTypes.DATE,
    publisherID: DataTypes.INTEGER,
    status: { type: DataTypes.STRING, defaultValue: 'Pending' }
});

module.exports = Task;
