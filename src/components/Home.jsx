import React, { useState, useEffect } from "react";
import { 
  FaSun, FaMoon, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane, FaLinkedinIn, 
  FaHome, FaCalendarAlt, FaPlus, FaCog, FaChartBar, FaArrowRight, FaArrowLeft, 
  FaLink,
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaUsers,
  FaGem
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // State to handle dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Carousel Images
  const carouselImages1 = [
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1724410105/answer_img/xmguzz40atz8red76je9.png",
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1718298355/answer_img/xn446ck6ioag03in3vlc.png",
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1724410122/answer_img/yjjjtrrsdoh8blmfd4eu.png",
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1724410215/answer_img/gfenbtodpvwj0ukzoduk.png"
  ];
  const carouselImages2 = [
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1718298663/answer_img/yssezekxomsupx3idjbg.png",
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1718298712/answer_img/qajogndhzd01sc5uihyp.png",
    "http://res.cloudinary.com/green-valley-grocery/image/upload/v1724410236/answer_img/nc9qgz7yp6tnddwnvd3w.png",
  ];

  // State to handle the active image in each carousel
  const [activeIndex1, setActiveIndex1] = useState(0); // Carousel 1
  const [activeIndex2, setActiveIndex2] = useState(0); // Carousel 2

  // Automatically slide the first carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex1((prevIndex) => (prevIndex + 1) % carouselImages1.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages1.length]);

  // Automatically slide the second carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex2((prevIndex) => (prevIndex + 1) % carouselImages2.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [carouselImages2.length]);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Move to the next slide in Carousel 1
  const goNext1 = () => {
    setActiveIndex1((prevIndex) => (prevIndex + 1) % carouselImages1.length);
  };

  // Move to the previous slide in Carousel 1
  const goPrev1 = () => {
    setActiveIndex1((prevIndex) =>
      prevIndex === 0 ? carouselImages1.length - 1 : prevIndex - 1
    );
  };

  // Move to the next slide in Carousel 2
  const goNext2 = () => {
    setActiveIndex2((prevIndex) => (prevIndex + 1) % carouselImages2.length);
  };

  // Move to the previous slide in Carousel 2
  const goPrev2 = () => {
    setActiveIndex2((prevIndex) =>
      prevIndex === 0 ? carouselImages2.length - 1 : prevIndex - 1
    );
  };
  const navigate = useNavigate();
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white max-w-[370px] mx-auto">


        {/* Wallet, Earnings, Referrals Section */}
      <div className="p-4 grid grid-cols-3 gap-4 text-center bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div>
          <p className="font-semibold">Wallet</p>
          <p className="text-green-600">₹0</p>
        </div>
        <div>
          <p className="font-semibold">Earnings</p>
          <p>₹0 <span className="text-blue-600">$</span></p>
        </div>
        <div>
          <p className="font-semibold">Referrals</p>
          <p className="text-yellow-500">0</p>
        </div>
      </div>

        {/* Carousel 1 */}
<div className="mt-5 flex flex-col justify-center relative">
  <div className="w-full relative overflow-hidden rounded-lg">
    {/* Carousel Images */}
    <div
      className="whitespace-nowrap transition-transform duration-700"
      style={{ transform: `translateX(-${activeIndex1 * 100}%)` }}
    >
      {carouselImages1.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel"
          className="w-full h-40 inline-block object-cover"
        />
      ))}
    </div>
    
    {/* Previous Button */}
    <button
      onClick={goPrev1}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      <FaArrowLeft size={20} />
    </button>
    
    {/* Next Button */}
    <button
      onClick={goNext1}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      <FaArrowRight size={20} />
    </button>
  </div>

  {/* Dots (Pagination Indicators) */}
  <div className="flex justify-center mt-2">
    {carouselImages1.map((_, index) => (
      <span
        key={index}
        onClick={() => setActiveIndex1(index)}
        className={`cursor-pointer h-2 w-2 rounded-full mx-1 ${
          activeIndex1 === index ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></span>
    ))}
  </div>
</div>


        {/* Social Media Task Section */}
<div className="p-5">
  <h2 className="text-2xl font-bold mb-5 text-center">Social Media Task</h2>
  <div className="grid grid-cols-3 gap-3 text-center">
  <button
      className="flex flex-col items-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
      onClick={() => navigate("/instagram-task")} // Direct navigation onClick
    >
      <FaInstagram size={20} />
      <span className="mt-1 text-xs">Instagram</span>
    </button>
    <button className="flex flex-col items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
     onClick={() => navigate("/facebook-task")}
    >
      <FaFacebookF size={20} />
      <span className="mt-1 text-xs">Facebook</span>
    </button>
    <button 
    className="flex flex-col items-center bg-gradient-to-r from-gray-800 to-black text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    onClick={() => navigate("/x-task")}
    >
      <FaTwitter size={20} />
      <span className="mt-1 text-xs">X</span>
    </button>
    <button 
    className="flex flex-col items-center bg-gradient-to-r from-red-500 to-red-700 text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
    onClick={() => navigate("/youtube-task")}
    >
      <FaYoutube size={20} />
      <span className="mt-1 text-xs">Youtube</span>
    </button>
    <button
     className="flex flex-col items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
     onClick={() => navigate("/telegram-task")}
     >
      <FaTelegramPlane size={20} />
      <span className="mt-1 text-xs">Telegram</span>
    </button>
    <button
     className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
     onClick={() => navigate("/linkedin-task")}
     >
      <FaLinkedinIn size={20} />
      <span className="mt-1 text-xs">LinkedIn</span>
    </button>
  </div>
</div>


       {/* Carousel 2 */}
<div className="mt-5 flex flex-col justify-center relative">
  <div className="w-full relative overflow-hidden rounded-lg">
    {/* Carousel Images */}
    <div
      className="whitespace-nowrap transition-transform duration-700"
      style={{ transform: `translateX(-${activeIndex2 * 100}%)` }}
    >
      {carouselImages2.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Carousel"
          className="w-full h-40 inline-block object-cover"
        />
      ))}
    </div>
    
    {/* Previous Button */}
    <button
      onClick={goPrev2}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      <FaArrowLeft size={20} />
    </button>
    
    {/* Next Button */}
    <button
      onClick={goNext2}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
    >
      <FaArrowRight size={20} />
    </button>
  </div>

  {/* Dots (Pagination Indicators) */}
  <div className="flex justify-center mt-2">
    {carouselImages2.map((_, index) => (
      <span
        key={index}
        onClick={() => setActiveIndex2(index)}
        className={`cursor-pointer h-2 w-2 rounded-full mx-1 ${
          activeIndex2 === index ? "bg-blue-500" : "bg-gray-400"
        }`}
      ></span>
    ))}
  </div>
</div>

 {/* Refer Links, Membership, and Social Links Section */}
 <div className="p-4 space-y-6">
  {/* Share Your Refer Link Section */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-center">
    <p className="font-semibold mb-4">Share Your Refer Link</p>
    <div className="grid grid-cols-4 gap-4">
      <button className="flex flex-col items-center">
        <div className="bg-blue-200 p-3 rounded-full">
          <FaLink size={20} />
        </div>

      </button>
      <button className="flex flex-col items-center">
        <div className="bg-green-200 p-3 rounded-full">
          <FaWhatsapp size={20} />
        </div>
      </button>
      <button className="flex flex-col items-center">
        <div className="bg-blue-400 p-3 rounded-full">
          <FaFacebook size={20} />
        </div>

      </button>
      <button className="flex flex-col items-center">
        <div className="bg-blue-200 p-3 rounded-full">
          <FaTelegram size={20} />
        </div>

      </button>
    </div>
  </div>

  {/* Premium Membership and My Leads */}
  <div className="grid grid-cols-2 gap-4">
    <button className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex flex-col items-center">
      <FaGem size={30} className="text-blue-500" />
      <p className="font-semibold mt-1 text-xs">Premium Membership</p>
    </button>
    <button className="bg-gray-100 dark:bg-gray-800 p-2 rounded-xl flex flex-col items-center">
      <FaUsers size={30} className="text-blue-500" />
      <p className="font-semibold mt-1 text-xs">My Leads</p>
    </button>
  </div>

  {/* Connected With Us Section */}
  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl text-center mb-60">
    <p className="font-semibold mb-4">Connected With Us</p>
    <div className="flex justify-around mb-14">
      <FaWhatsapp size={30} className="text-green-500" />
      <FaTelegram size={30} className="text-blue-500" />
      <FaYoutube size={30} className="text-red-500" />
      <FaTwitter size={30} className="text-blue-500" />
      <FaInstagram size={30} className="text-pink-500" />
      <FaFacebook size={30} className="text-blue-500" />
    </div>
  </div>
</div>


        {/* Footer */}
         <footer className="fixed bottom-0 w-full bg-gradient-to-r from-blue-500 to-blue-600 p-4 shadow-lg rounded-t-3xl max-w-[370px]  mx-auto">
          <div className="flex justify-around text-white">
            {/* Home Button */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaHome size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="mt-1 text-sm group-hover:font-semibold transition duration-200">Home</span>
            </div>

            {/* Calendar Button */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaCalendarAlt size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </div>

            {/* Add Button */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaPlus size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </div>

            {/* Settings Button */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaCog size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </div>

            {/* Stats Button */}
            <div className="flex flex-col items-center group cursor-pointer">
              <FaChartBar size={24} className="group-hover:scale-110 transition-transform duration-200" />
            </div>
          </div>
        </footer> 
      </div>
    </div>
  );
};

export default Home;
