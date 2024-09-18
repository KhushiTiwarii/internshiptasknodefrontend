import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [platform, setPlatform] = useState('');

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/tasks/platform/${platform}`);
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  useEffect(() => {
    if (platform) fetchTasks();
  }, [platform]);

  return (
    <div>
      <h2>Tasks</h2>
      <input type="text" placeholder="Enter platform" value={platform} onChange={(e) => setPlatform(e.target.value)} />
      <button onClick={fetchTasks}>Fetch Tasks</button>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Points: {task.points}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
