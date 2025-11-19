const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const sequelize = require('./infrastructure/db');
const Task = require('./domain/task');
const User = require('./domain/user'); 


const userRoutes = require('./interfaces/userController');
const taskRoutes = require('./interfaces/taskController');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;


sequelize.sync({ alter: true })
    .then(() => {
        console.log('Database & tables created!');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log('Error syncing database: ', err));
