const API_BASE = "https://6807cb21942707d722dc723c.mockapi.io";
const API_BASETWO = "https://67ae22f99e85da2f020c8b73.mockapi.io";

export const fetchCards = async () => {
  const response = await fetch(`${API_BASE}/t-shirts`);

  if (!response.ok) {
    throw new Error("Failed to fetch t-shirts");
  }
  return response.json();
};

export const fetchComent = async () => {
  const response = await fetch(`${API_BASE}/feedBack`);

  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return response.json();
};

export const createComent = async (newBlog) => {
  const response = await fetch(`${API_BASE}/feedBack`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBlog),
  });

  if (!response.ok) {
    throw new Error("Failed to create comment");
  }
  return response.json();
};

export const registerUser = async (newUser) => {
  const response = await fetch(`${API_BASETWO}/registration`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return response.json();
};

export const lgoinUser = async (credentials) => {
  const response = await fetch(`${API_BASETWO}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return response.json();
};
