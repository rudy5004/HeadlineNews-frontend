const API_KEY = "241d2d8b21e74f8481bedeaadbcb79d9"; // Your API key
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (query) => {
  const url = `${BASE_URL}/everything?q=${query}&from=${getLast7Days()}&to=${getCurrentDate()}&pageSize=100&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error; // Re-throw error so you can handle it in the component
  }
};

// Helper function to get the date 7 days ago
const getLast7Days = () => {
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split("T")[0]; // Format to YYYY-MM-DD
};

// Helper function to get the current date
const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0]; // Format to YYYY-MM-DD
};
