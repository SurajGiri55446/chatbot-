const ChatResponse = ({ response }) => {
  if (!response) {
    return (
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto mt-10 text-gray-500">
        <div className="text-6xl">💬</div>
        <h3 className="mt-2 text-2xl font-semibold">
          Welcome to Gemini ChatBot
        </h3>
        <p className="text-gray-600">Ask me anything to get started!</p>
      </div>
    );
  }

  const { candidates, usageMetadata } = response;

  return (
    <div className="w-full max-w-2xl p-6 mx-auto mt-6 bg-white rounded-lg shadow-md">
      {candidates.map((candidate, index) => (
        <div className="p-4 mt-4 bg-gray-100 rounded-lg shadow" key={index}>
          <h5 className="text-lg font-medium text-blue-600">
            AI Reply {index + 1}
          </h5>
          <p className="mt-2 text-gray-700">
            {candidate.content.parts[0].text}
          </p>
          {candidate?.citationMetadata?.citationSources?.length > 0 && (
            <ul className="mt-2 text-sm text-gray-600">
              {candidate.citationMetadata.citationSources.map((source, idx) => (
                <li key={idx} className="mt-1">
                  <a
                    href={source.uri}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
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
