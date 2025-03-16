import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponse";
import { fetchChatResponse } from "./services/api";
import { FiSettings, FiMoon, FiSun } from "react-icons/fi";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleQuestionSubmit = async (question) => {
    setLoading(true);
    c;
    setResponse(null);
    try {
      const apiResponse = await fetchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Failed to get response");
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-950"
      }`}
    >
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-between px-6 py-4 shadow-md ${
          isDarkMode ? "bg-gray-800" : "bg-gray-800"
        }`}
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold text-white">
          <span className="text-white">💬</span> ChatBot
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 transition-colors rounded-full hover:bg-gray-700"
          >
            {isDarkMode ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-300" />
            )}
          </button>
          <FiSettings className="text-xl text-white transition-transform cursor-pointer hover:rotate-90" />
        </div>
      </motion.header>

      {/* Main Chat Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        <AnimatePresence>
          {!response && !loading && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="text-center"
            >
              <span className="text-8xl">💭</span>
              <h2 className="mt-4 text-3xl font-bold text-gray-600">
                Welcome to ChatBot
              </h2>
              <p className="mt-2 text-lg text-gray-700">
                Ask me anything to get started!
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {loading && (
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-xl text-blue-500 animate-pulse"
          >
            Searching...
          </motion.h3>
        )}

        <ChatResponse response={response} isDarkMode={isDarkMode} />
      </main>

      {/* Chat Input Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center w-full px-4 pb-6"
      >
        <div
          className={`flex items-center w-full max-w-2xl px-4 py-2 rounded-full shadow-lg transition-colors duration-300 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <ChatInput onSubmit={handleQuestionSubmit} isDarkMode={isDarkMode} />
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={`py-4 text-sm text-center transition-colors duration-300 ${
          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-900 text-gray-100"
        }`}
      >
        &copy; {new Date().getFullYear()} ChatBot. All Rights Reserved & Created
        by <span className="font-semibold">@suraj Giri</span>.
      </motion.footer>
    </div>
  );
}

export default App;
