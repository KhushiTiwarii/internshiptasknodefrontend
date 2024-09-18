import React from 'react';
import TaskList from './TaskList';

const Task = () => {
  return (
    <div>
      <h1>Welcome to the Task Management App</h1>
      <TaskList platform="Instagram" /> {/* Change platform as needed */}
    </div>
  );
};

export default Task;
