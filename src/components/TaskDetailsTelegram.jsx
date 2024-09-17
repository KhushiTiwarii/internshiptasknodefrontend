import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const TaskDetailsTelegram = () => {
  return (
    <div className="max-w-[370px] mx-auto p-5 bg-white dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center mb-5">Telegram Task Details</h2>
      <div className="space-y-4 cursor-pointer">
        {[
          "Monthly leaderboard winner 🏆",
          "Share With 5 friends!",
          "Earn daily win Big Reward!",
          "Claim 10 Points Every Hour",
          "Weekly Leaderboard Prize",
          "Join the Telegram Group"
        ].map((task, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ minHeight: '80px' }} // Set equal minimum height
          >
            <div className="flex items-center">
              <FaTelegramPlane size={24} className="mr-3" />
              <span>{task}</span>
            </div>
            <span className="bg-white text-blue-400 py-1 px-3 rounded-full text-sm font-semibold">
              10 Points
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskDetailsTelegram;
