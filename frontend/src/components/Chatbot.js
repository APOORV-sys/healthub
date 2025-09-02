import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', message: 'Hello! How can I help you with your health today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { id: Date.now(), type: 'user', message: input };
      setMessages(prev => [...prev, newMessage]);
      
      setTimeout(() => {
        const botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          message: 'Thank you for your message. Based on your symptoms, I recommend consulting with a healthcare professional. Would you like me to help you find nearby clinics?' 
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
      
      setInput('');
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl h-96 flex flex-col border border-primary-200 shadow-lg">
      <div className="border-b border-primary-200 p-4">
        <div className="flex items-center space-x-2">
          <span className="text-primary-700 text-2xl">💬</span>
         <div>
           <h3 className="text-xl font-bold text-primary-900">Health Assistant</h3>
           <p className="text-sm text-primary-600">Ask me anything about your health</p>
         </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map(msg => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg backdrop-blur-sm ${
              msg.type === 'user'
                ? 'bg-primary-600 text-white'
                : 'bg-primary-50 text-primary-900 border border-primary-200'
            }`}>
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t border-primary-200 p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your health question..."
            className="flex-1 px-3 py-2 bg-primary-50 backdrop-blur-sm border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;


