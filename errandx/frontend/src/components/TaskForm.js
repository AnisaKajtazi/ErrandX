import React, { useState } from 'react';
import taskService from '../services/taskService';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, price, deadline };
    try {
      const createdTask = await taskService.createTask(newTask);
      onTaskCreated(createdTask);
      setTitle('');
      setDescription('');
      setPrice('');
      setDeadline('');
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} required />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
