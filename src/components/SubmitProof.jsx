import React, { useState } from 'react';
import axios from 'axios';

const SubmitProof = () => {
  const [taskId, setTaskId] = useState('');
  const [proofLink, setProofLink] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://localhost:5000/api/tasks/submit/${taskId}`, { userId: 'yourUserId', proofLink }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Proof submitted successfully!');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Submit Task Proof</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task ID" value={taskId} onChange={(e) => setTaskId(e.target.value)} />
        <input type="text" placeholder="Proof Link" value={proofLink} onChange={(e) => setProofLink(e.target.value)} />
        <button type="submit">Submit Proof</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SubmitProof;
