import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const UserDashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh); 
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refresh} /> 
    </div>
  );
};

export default UserDashboard;
