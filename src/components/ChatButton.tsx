"use client";
import React, { useState } from "react";

const ChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-105"
        aria-label="Chat with us"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
        {isHovered && (
          <span className="absolute -top-10 right-0 bg-gray-800 text-white text-sm py-1 px-3 rounded whitespace-nowrap">
            Chat with an agent
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatButton; 