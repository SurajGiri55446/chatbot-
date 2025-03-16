import axios from "axios";

// Use the deployed backend URL instead of localhost
const API_URL =
  "https://chatbot-backend-production-1dcd.up.railway.app/api/qna/ask";

export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(API_URL, { question });
    return response.data;
  } catch (error) {
    console.error("Error fetching chat response:", error);
    throw new Error("Failed to fetch chat response. Please try again later.");
  }
};
