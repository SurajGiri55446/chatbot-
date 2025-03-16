const ChatResponse = ({ response, isDarkMode }) => {
  if (!response) {
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-10">
        <div className="text-7xl">💬</div>
        <h3 className="mt-2 text-3xl font-semibold">Welcome to ChatBot</h3>
        <p className={isDarkMode ? "text-gray-500" : "text-gray-700"}>
          Ask me anything to get started!
        </p>
      </div>
    );
  }

  const { candidates } = response;

  return (
    <div
      className={`w-full max-w-2xl p-6 mx-auto mt-6 rounded-lg shadow-md ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {candidates.map((candidate, index) => (
        <div
          className={`p-4 mt-4 rounded-lg shadow ${
            isDarkMode ? "bg-gray-700" : "bg-gray-50"
          }`}
          key={index}
        >
          <h5 className="text-lg font-semibold text-blue-600">AI Reply</h5>
          <p
            className={`mt-2 ${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
          >
            {candidate.content.parts[0].text}
          </p>
          {candidate?.citationMetadata?.citationSources?.length > 0 && (
            <ul className="mt-2 text-sm">
              {candidate.citationMetadata.citationSources.map((source, idx) => (
                <li key={idx} className="mt-1">
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
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatResponse;
