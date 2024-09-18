// import { Link } from 'react-router-dom';

// const platforms = ['Facebook', 'Instagram', 'Twitter'];  // Add more platforms as needed

// const Homepage = () => {
//   return (
//     <div>
//       <h1>Select a Platform</h1>
//       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
//         {platforms.map((platform) => (
//           <Link key={platform} to={`/platform/${platform.toLowerCase()}`}>
//             <div style={{ border: '1px solid black', padding: '20px' }}>
//               {platform}
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Homepage;


import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const platforms = ['Facebook', 'Instagram', 'Twitter']; // Add more platforms as needed

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Select a Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <Link key={platform} to={`/platform/${platform.toLowerCase()}`}>
              <div className="p-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md flex items-center justify-between hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                <span className="text-lg font-medium">{platform}</span>
                <FaArrowRight size={20} className="text-blue-500 dark:text-blue-400" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
