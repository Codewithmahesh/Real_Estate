"use client";
import React, { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true); // Using useState correctly

  return (
    <div className="chat flex flex-col h-full">
      <div className="messages flex-1 flex flex-col gap-4 overflow-y-auto p-4 bg-gray-100">
        <h1 className="text-xl font-light mb-4">Messages</h1>

        {/* Message components */}
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="message bg-white p-4 rounded-lg flex items-center gap-4 cursor-pointer shadow-md"
          >
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="font-bold">John Don</span>
              <p className="text-gray-700">Lorem ipsum dolor, sit amet...</p>
            </div>
          </div>
        ))}
      </div>

      {/* Chatbox */}
      {chat && (
        <div className="chatBox flex flex-col bg-white shadow-lg border-t border-gray-200">
          <div className="top bg-yellow-200 p-4 flex items-center justify-between border-b border-yellow-300">
            <div className="user flex items-center gap-3">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="font-bold text-gray-800">John Doe</span>
            </div>
            <div
              className="close text-gray-600 cursor-pointer hover:text-gray-800"
              onClick={() => setChat(false)}
            >
              X
            </div>
          </div>
          <div className="center p-4 overflow-y-auto flex-1">
            <div className="chatMessage mb-4 p-3 bg-gray-100 rounded-lg shadow-sm">
              <p className="text-gray-700">Lorem ipsum dolor, sit amet...</p>
              <span className="text-xs text-gray-500 block mt-1">
                1 hour ago
              </span>
            </div>
            <div className="chatMessage own mb-4 p-3 bg-yellow-100 rounded-lg shadow-sm self-end">
              <p className="text-gray-700">Lorem ipsum dolor, sit amet...</p>
              <span className="text-xs text-gray-500 block mt-1">
                1 hour ago
              </span>
            </div>
          </div>
          <div className="bottom p-4 border-t border-gray-200 flex items-center gap-3">
            <textarea
              className="flex-1 border border-gray-300 rounded-lg p-3 resize-none"
              placeholder="Type a message..."
            ></textarea>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
