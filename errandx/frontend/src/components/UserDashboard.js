import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const UserDashboard = () => {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh); // trigger TaskList refresh
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refresh} /> {/* key për rifreskim */}
    </div>
  );
};

export default UserDashboard;
