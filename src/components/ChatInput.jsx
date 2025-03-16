import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ChatInput = ({ onSubmit, isDarkMode }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onSubmit(question);
      setQuestion("");
    }
  };

  return (
    <div className="flex items-center w-full">
      <input
        type="text"
        id="question"
        placeholder="Ask  something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className={`flex-grow p-3 outline-none rounded-l-full ${
          isDarkMode
            ? "bg-gray-700 text-gray-300 placeholder-gray-400"
            : "bg-white text-gray-800 placeholder-gray-500"
        }`}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={`w-12 h-12 p-3 rounded-r-full ${
          isDarkMode ? "bg-sky-500" : "bg-sky-600"
        } text-white hover:bg-blue-700 transition duration-200 flex items-center justify-center`}
      >
        <FiSend className="text-xl" />
      </button>
    </div>
  );
};

export default ChatInput;
