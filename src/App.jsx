import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatResponse from "./components/ChatResponse";
import { fetchChatResponse } from "./services/api";
import { FiSettings } from "react-icons/fi";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-gray-50">
      {/* Header Section */}
      <header className="flex items-center justify-between px-6 py-4 text-white bg-black shadow-md">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <span className="text-white">💬</span> Gemini ChatBot
        </h1>
        <FiSettings className="text-xl text-white transition-transform cursor-pointer hover:rotate-90" />
      </header>

      {/* Main Chat Section */}
      <main className="flex flex-col items-center justify-center flex-grow p-6">
        {!response && !loading && (
          <div className="text-center text-gray-500">
            <span className="text-4xl">💭</span>
            <h2 className="mt-2 text-xl font-semibold">
              Welcome to Gemini ChatBot
            </h2>
            <p className="text-sm">Ask me anything to get started!</p>
          </div>
        )}

        {loading && (
          <h3 className="mt-4 text-blue-500 animate-pulse">Searching...</h3>
        )}

        <ChatResponse response={response} />
      </main>

      {/* Chat Input Section */}
      <div className="flex items-center justify-center w-full px-4 pb-4">
        <div className="flex items-center w-full max-w-2xl px-4 py-2 bg-white rounded-full shadow-lg">
          <ChatInput onSubmit={handleQuestionSubmit} />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="py-3 text-sm text-center text-white bg-black">
        &copy; {new Date().getFullYear()} Gemini ChatBot. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
