import React, { useEffect, useState } from 'react';
import taskService from '../services/taskService';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const data = await taskService.getAllTasks();
      setTasks(data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await taskService.deleteTask(id);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>All Tasks</h2>
      {tasks.map(task => (
        <div key={task.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Price: ${task.price}</p>
          <p>Deadline: {task.deadline?.split('T')[0]}</p>
          <p>Status: {task.status}</p>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
