import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex items-center bg-white shadow-md rounded-full px-4 py-2">
      <input
        type="text"
        id="question"
        placeholder="Ask Gemini something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-grow p-3 outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition duration-200 flex items-center"
      >
        <FiSend className="text-xl" />
      </button>
    </div>
  );
};

export default ChatInput;
