import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post('http://localhost:3001/chatbot', { message: input });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
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
    <div className=' w-full h-screen flex justify-center items-center'>
      <div className="flex flex-col items-center p-4">
        <div className="chatbox bg-gray-100 overflow-scroll p-4 rounded-lg shadow-md w-full max-w-lg h-[50%]">
          {messages.map((msg, index) => (
            <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}>
              <span>{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="flex mt-4 w-full max-w-lg">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none"
            placeholder="Type your message..."
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded-r-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
