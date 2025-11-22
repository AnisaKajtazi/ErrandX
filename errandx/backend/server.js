const express = require('express');
const cors = require('cors');
require('dotenv').config(); // ngarkon variablat nga .env

const app = express();
app.use(cors());
app.use(express.json());

const sequelize = require('./infrastructure/db');
const Task = require('./domain/task');
const User = require('./domain/user'); 

const userRoutes = require('./interfaces/userController');
const taskRoutes = require('./interfaces/taskController');
const authenticateToken = require('./middleware/authMiddleware'); // middleware për JWT

// Routes për users (login + register)
app.use('/api/users', userRoutes);

// Routes për tasks (tani të mbrojtura me token)
app.use('/api/tasks', authenticateToken, taskRoutes);

const PORT = process.env.PORT || 5000;

// Sync database & start server
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log('Error syncing database: ', err));

// Error handler global (opsionale)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});
