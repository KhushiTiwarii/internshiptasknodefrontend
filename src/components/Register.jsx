// import { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/users/register', { name, email, password });
//       navigate('/');
//     } catch (error) {
//       alert('User already exists');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Register</h2>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default Register;

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      navigate('/');
    } catch (error) {
      alert('User already exists');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center dark:text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center border-b-2 border-gray-300 dark:border-gray-600 py-2">
            <FaUser className="text-gray-500 dark:text-gray-400 mr-3" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full outline-none bg-transparent text-gray-900 dark:text-gray-200"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 dark:border-gray-600 py-2">
            <FaEnvelope className="text-gray-500 dark:text-gray-400 mr-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full outline-none bg-transparent text-gray-900 dark:text-gray-200"
              required
            />
          </div>
          <div className="flex items-center border-b-2 border-gray-300 dark:border-gray-600 py-2">
            <FaLock className="text-gray-500 dark:text-gray-400 mr-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full outline-none bg-transparent text-gray-900 dark:text-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Register
          </button>
          <p className="text-center mt-4 dark:text-gray-400">
            Already have an account?{' '}
            <a href="/" className="text-blue-500 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
