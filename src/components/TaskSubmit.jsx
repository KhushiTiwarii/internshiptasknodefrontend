// // // import { useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';

// // // const TaskSubmit = () => {
// // //   const { taskId } = useParams();
// // //   const [proofLink, setProofLink] = useState('');
// // //   const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.post(`http://localhost:5000/api/tasks/submit/${taskId}`, { userId, proofLink });
// // //       alert('Proof submitted successfully');
// // //     } catch (error) {
// // //       alert('Error submitting proof');
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <h2>Submit Proof</h2>
// // //       <input
// // //         type="text"
// // //         value={proofLink}
// // //         onChange={(e) => setProofLink(e.target.value)}
// // //         placeholder="Enter Proof Link"
// // //       />
// // //       <button type="submit">Submit</button>
// // //     </form>
// // //   );
// // // };

// // // export default TaskSubmit;


// // import { useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';

// // const TaskSubmit = () => {
// //   const { taskId } = useParams();
// //   const [file, setFile] = useState(null);
// //   const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

// //   const handleFileChange = (e) => {
// //     setFile(e.target.files[0]);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
    
// //     if (!file) {
// //       alert('Please select a file to upload.');
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append('userId', userId);
// //     formData.append('proofFile', file);

// //     try {
// //       await axios.post(`http://localhost:5000/api/tasks/submit/${taskId}`, formData, {
// //         headers: {
// //           'Content-Type': 'multipart/form-data'
// //         }
// //       });
// //       alert('Proof submitted successfully');
// //     } catch (error) {
// //       alert('Error submitting proof');
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg">
// //       <h2 className="text-2xl font-bold text-center mb-5">Submit Proof</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input
// //           type="file"
// //           onChange={handleFileChange}
// //           className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white"
// //         />
// //         <button
// //           type="submit"
// //           className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 transition"
// //         >
// //           Submit
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default TaskSubmit;


// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import uploadFileToCloudinary from '../utils/uploadCloudinary'; // Adjust the import path as necessary

// const TaskSubmit = () => {
//   const { taskId } = useParams();
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!file) {
//       alert('Please select a file to upload.');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       // Upload file to Cloudinary
//       const cloudinaryResponse = await uploadFileToCloudinary(file);

//       // Submit file URL to your server
//       const proofLink = cloudinaryResponse.secure_url; // Get the file URL from Cloudinary response

//       await axios.post(`http://localhost:5000/api/tasks/submit/${taskId}`, { userId, proofLink });

//       alert('Proof submitted successfully');
//     } catch (error) {
//       setError('Error submitting proof');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold text-center mb-5">Submit Proof</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white"
//         />
//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 transition"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default TaskSubmit;


import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import uploadFileToCloudinary from '../utils/uploadCloudinary'; // Adjust the import path as necessary

const TaskSubmit = () => {
  const { taskId } = useParams();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileUrl, setFileUrl] = useState(''); // State to store the Cloudinary URL
  const userId = JSON.parse(localStorage.getItem('userInfo'))._id;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setLoading(true);
    setError('');
    setFileUrl(''); // Reset file URL on new submission

    try {
      // Upload file to Cloudinary
      const cloudinaryResponse = await uploadFileToCloudinary(file);

      // Submit file URL to your server
      const proofLink = cloudinaryResponse.secure_url; // Get the file URL from Cloudinary response
      setFileUrl(proofLink); // Update the state with the file URL

      await axios.post(`http://localhost:5000/api/tasks/submit/${taskId}`, { userId, proofLink });

      alert('Proof submitted successfully');
    } catch (error) {
      setError('Error submitting proof');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-5">Submit Proof</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:text-white"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {fileUrl && (
          <div className="mt-4 text-center">
            <p className="text-green-500">File uploaded successfully!</p>
            <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View Uploaded File Proof
            </a>
          </div>
        )}
      </form>
    </div>
  );
};

export default TaskSubmit;
