import React from "react";
import { FaCalendarAlt, FaChartBar, FaCog, FaHome, FaInstagram, FaPlus } from "react-icons/fa";

const TaskDetailsIg = () => {
  return (
    <>
    <div className="max-w-[370px] mx-auto p-5 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-5">Task Details</h2>
      <div className="space-y-4 cursor-pointer">
        {[
          "Monthly leaderboard winner 🏆",
          "Share With 5 friends!",
          "Earn daily win Big Reward!",
          "Claim 10 Point Every Hour",
          "Weekly Leaderboard Prize",
          "Like the Instagram Post"
        ].map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ minHeight: '80px' }} // Set equal minimum height
          >
            <div className="flex items-center">
              <FaInstagram size={24} className="mr-3" />
              <span>{task}</span>
            </div>
            <span className="bg-white text-red-500 py-1 px-3 rounded-full text-sm font-semibold">
              10 Points
            </span>
          </div>
        ))}
      </div>
    </div> 
    </>
    
  );
};

export default TaskDetailsIg;
