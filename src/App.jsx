import { useState } from "react";
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
      className={`flex flex-col min-h-screen ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-950"
      }`}
    >
      {/* Header Section */}
      <header
        className={`flex items-center justify-between px-6 py-4 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-800"
        } shadow-md`}
      >
        <h1 className="flex items-center gap-2 text-xl font-bold text-white">
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
      </header>

      {/* Main Chat Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        {!response && !loading && (
          <div className="text-center">
            <span className="text-6xl">💭</span>
            <h2 className="mt-2 text-2xl font-bold text-gray-600">
              Welcome to ChatBot
            </h2>
            <p className="text-sm text-gray-700">
              Ask me anything to get started!
            </p>
          </div>
        )}

        {loading && (
          <h3 className="mt-4 text-blue-500 animate-pulse">Searching...</h3>
        )}

        <ChatResponse response={response} isDarkMode={isDarkMode} />
      </main>

      {/* Chat Input Section */}
      <div className="flex items-center justify-center w-full px-4 pb-4">
        <div
          className={`flex items-center w-full max-w-2xl px-4 py-2 rounded-full shadow-lg ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <ChatInput onSubmit={handleQuestionSubmit} isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* Footer Section */}
      <footer
        className={`py-3 text-sm text-center ${
          isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-800 text-gray-100"
        }`}
      >
        &copy; {new Date().getFullYear()} ChatBot. All Rights Reserved & Created
        by<h2>@ suraj Giri.</h2>
      </footer>
    </div>
  );
}

export default App;
