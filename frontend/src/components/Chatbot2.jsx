import React, { useState } from 'react'
import axios from 'axios';

const Chatbot2 = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
  
    const sendMessage = async () => {
      if (input.trim() === '') return;
  
      const userMessage = { sender: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
  
  
      try {
        const response = await axios.post('http://localhost:3001/chatbot', { message: input });
        const botMessage = { sender: 'bot', text: response.data.reply };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error communicating with the chatbot server', error);
        setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: 'Error communicating with the server' }]);
      } finally {
        setInput('');
      }
    };
  
    const handleInputChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    };
  
    return (
      <div className="flex h-screen antialiased text-gray-800 pt-14">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            {/* Sidebar */}
          </div>
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-red-100 h-full p-4">
              {/* Chat display */}
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'} mb-2`}>
                      <div className={`flex ${msg.sender === 'user' ? '' : 'flex-row-reverse'} items-center`}>
                        <div className={`flex items-center justify-center h-10 w-10 rounded-full ${msg.sender === 'user' ? 'bg-indigo-500' : 'bg-gray-300'} flex-shrink-0`}>
                          {msg.sender.charAt(0).toUpperCase()}
                        </div>
                        <div className={`relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl ${msg.sender === 'user' ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                          <div>{msg.text}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Input field */}
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div>
                  <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    {/* Left icon */}
                  </button>
                </div>
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      onKeyPress={handleKeyPress}
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                      placeholder="Type your message..."
                    />
                    {/* Right icon */}
                    <button
                      onClick={sendMessage}
                      className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                {/* Send button */}
                <div className="ml-4">
                  <button
                    onClick={sendMessage}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default Chatbot2