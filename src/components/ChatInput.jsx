import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center w-full"
    >
      <input
        type="text"
        id="question"
        placeholder="Ask something..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className={`flex-grow p-4 outline-none rounded-l-full transition-colors duration-300 ${
          isDarkMode
            ? "bg-gray-700 text-gray-100 placeholder-gray-400"
            : "bg-white text-gray-800 placeholder-gray-500"
        }`}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className={`w-14 h-14 p-4 rounded-r-full transition-colors duration-300 ${
          isDarkMode ? "bg-sky-500" : "bg-sky-600"
        } text-white hover:bg-blue-700 flex items-center justify-center`}
      >
        <FiSend className="text-xl" />
      </button>
    </motion.div>
  );
};

export default ChatInput;
