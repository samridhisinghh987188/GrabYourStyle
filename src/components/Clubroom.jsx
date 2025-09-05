import React, { useState } from "react";

export default function Clubroom() {
  const [messages, setMessages] = useState([
    { id: 1, user: "Stylist", text: "Hi! Welcome to your free demo session!" },
    { id: 2, user: "You", text: "Hello, I’m excited to learn more!" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: Date.now(), user: "You", text: input }]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto border rounded-lg shadow-lg bg-white">
      {/* Header */}
      <div className="p-4 bg-blue-600 text-white font-semibold text-lg rounded-t-lg">
        💬 Demo Chat Room
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.user === "You" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                msg.user === "You"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-bl-none"
              }`}
            >
              <p className="text-sm font-semibold">{msg.user}</p>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 border-t flex gap-2 bg-gray-50">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
