"use client";
import React, { useState } from "react";

const ChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Popup */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl mb-4 w-80 sm:w-96 transform transition-all duration-300 scale-100 origin-bottom-right animate-fade-in border border-gray-100">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-t-xl p-4 flex justify-between items-center">
            <h3 className="text-white font-medium flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              Chat with an Agent
            </h3>
            <button 
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-blue-700/50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="p-4 h-72 overflow-y-auto">
            {/* Agent Message */}
            <div className="flex mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-blue-600 font-bold">A</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-3 max-w-[80%]">
                <p className="text-gray-800">Hi there! How can I help you with your real estate investment needs today?</p>
                <span className="text-xs text-gray-500 mt-1 block">12:03 PM</span>
              </div>
            </div>

            {/* Example User Message - Uncomment to show */}
            {/* <div className="flex mb-4 justify-end">
              <div className="bg-blue-600 rounded-xl p-3 max-w-[80%] text-white">
                <p>I'm looking for investment properties in Seattle with at least a 6% cap rate.</p>
                <span className="text-xs text-blue-200 mt-1 block">12:04 PM</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ml-2 flex-shrink-0">
                <span className="text-gray-600 font-bold">Y</span>
              </div>
            </div> */}

            {/* Agent Response - Uncomment to show*/}
            {/* <div className="flex mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center mr-2 flex-shrink-0">
                <span className="text-blue-600 font-bold">A</span>
              </div>
              <div className="bg-gray-100 rounded-xl p-3 max-w-[80%]">
                <p className="text-gray-800">Great! I can help you find properties with a 6%+ cap rate. What neighborhoods in Seattle are you interested in?</p>
                <span className="text-xs text-gray-500 mt-1 block">12:05 PM</span>
              </div>
            </div> */}
          </div>
          <div className="border-t p-4">
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors flex items-center">
                <span className="sr-only">Send</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Button */}
      <button 
        className={`
          ${isOpen ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} 
          text-white p-4 rounded-full shadow-lg flex items-center justify-center 
          transition-all duration-300 transform hover:scale-105 group relative
          ${isOpen ? '' : 'animate-bounce-in'}
        `}
        aria-label="Chat with us"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
        {isHovered && !isOpen && (
          <span className="absolute -top-10 right-0 bg-gray-800 text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap animate-fade-in after:content-[''] after:absolute after:top-full after:right-4 after:border-8 after:border-transparent after:border-t-gray-800">
            Chat with an agent
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatButton; 