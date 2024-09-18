// import { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';

// const PlatformTasks = () => {
//   const { platform } = useParams();
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       const { data } = await axios.get(`http://localhost:5000/api/tasks/platform/${platform}`);
//       setTasks(data);
//     };
//     fetchTasks();
//   }, [platform]);

//   return (
//     <div>
//       <h2>Tasks for {platform}</h2>
//       <ul>
//         {tasks.map(task => (
//           <li key={task._id}>
//             <Link to={`/task/${task._id}`}>
//               {task.title} - {task.points} Points
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PlatformTasks;


import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { FaInstagram } from 'react-icons/fa';

const PlatformTasks = () => {
  const { platform } = useParams();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/tasks/platform/${platform}`);
      setTasks(data);
    };
    fetchTasks();
  }, [platform]);

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-5">Tasks for {platform}</h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <Link key={task._id} to={`/task/${task._id}`}>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-10 max-w-sm mx-auto">
              <div className="flex items-center">
                <FaInstagram size={24} className="mr-3" />
                <span>{task.title}</span>
              </div>
              <span className="bg-white text-red-500 py-1 px-3 rounded-full text-sm font-semibold">
                {task.points} Points
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlatformTasks;
