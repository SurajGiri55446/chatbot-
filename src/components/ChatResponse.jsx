import { motion, AnimatePresence } from "framer-motion";

const ChatResponse = ({ response, isDarkMode }) => {
  if (!response) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center w-full max-w-2xl mx-auto mt-10"
      >
        <div className="text-8xl">💬</div>
        <h3 className="mt-4 text-3xl font-bold text-gray-600">
          Welcome to ChatBot
        </h3>
        <p
          className={`mt-2 text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          Ask me anything to get started!
        </p>
      </motion.div>
    );
  }

  const { candidates } = response;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-2xl p-6 mx-auto mt-6 rounded-lg shadow-md transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <AnimatePresence>
        {candidates.map((candidate, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`p-6 mt-6 rounded-lg shadow transition-colors duration-300 ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            }`}
          >
            <h5 className="text-xl font-semibold text-blue-600">AI Reply</h5>
            <p
              className={`mt-4 text-lg ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              {candidate.content.parts[0].text}
            </p>
            {candidate?.citationMetadata?.citationSources?.length > 0 && (
              <ul className="mt-4 text-sm">
                {candidate.citationMetadata.citationSources.map(
                  (source, idx) => (
                    <li key={idx} className="mt-2">
                      <a
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {source.uri}
                      </a>{" "}
                      (Indexes: {source.startIndex} - {source.endIndex})
                    </li>
                  )
                )}
              </ul>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChatResponse;
