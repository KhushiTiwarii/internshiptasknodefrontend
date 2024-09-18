// import React, { useState } from 'react';

// const TaskSubmissionForm = ({ taskId }) => {
//   const [file, setFile] = useState(null);
//   const [userId, setUserId] = useState(''); // Replace with actual logic to get userId
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const formData = new FormData();
//     formData.append('proof', file);
//     formData.append('userId', userId);
//     formData.append('taskId', taskId);

//     try {
//       const response = await fetch('/api/v1/tasks/submit-task', {
//         method: 'POST',
//         body: formData,
//       });
//       const data = await response.json();
//       setMessage(data.message);
//     } catch (error) {
//       console.error('Error submitting task:', error);
//       setMessage('Error submitting task');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" accept="image/*" onChange={handleFileChange} required />
//       <button type="submit">Submit Task</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default TaskSubmissionForm;

import React, { useState } from 'react';
import axios from 'axios';

const TaskDetails = ({ taskId }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('proof', file);

    await axios.post(`/api/v1/tasks/${taskId}/submit`, formData);
  };

  return (
    <div className="p-6">
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit Proof
      </button>
    </div>
  );
};

export default TaskDetails;
