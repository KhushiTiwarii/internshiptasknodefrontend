import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css'; // import tailwind css
import Home from "./components/Home";
import TaskDetailsIg from "./components/TaskDetailsIg";
import { FaCalendarAlt, FaChartBar, FaCog, FaHome, FaMoon, FaPlus, FaSun } from "react-icons/fa";
import TaskDetailsFb from "./components/TaskDetailsFb";
import TaskDetailsX from "./components/TaskDetailsX";
import TaskDetailsYoutube from "./components/TaskDetailsYoutube";
import TaskDetailsTelegram from "./components/TaskDetailsTelegram";
import TaskDetailsLinkedIn from "./components/TaskDetailsLinkedin";

const App = () => {
  const [darkMode, setDarkMode] = useState(false); // Manage dark mode state

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the root element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <header className="max-w-[370px] mx-auto p-5 bg-gray-100 dark:bg-gray-800 flex justify-between items-center dark:text-white">
  <h1 className="text-xl font-bold">TaskPlanet</h1>
  <button
    onClick={toggleDarkMode}
    className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full dark:text-white"
  >
    {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
  </button>
</header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/instagram-task' element={<TaskDetailsIg />} />
          <Route path='/facebook-task' element={<TaskDetailsFb />} />
          <Route path='/x-task' element={<TaskDetailsX />} />
          <Route path='/youtube-task' element={<TaskDetailsYoutube />} />
          <Route path='/telegram-task' element={<TaskDetailsTelegram />} />
          <Route path='/linkedin-task' element={<TaskDetailsLinkedIn />} />
        </Routes>
      </main>

    </>

  );
};

export default App;
