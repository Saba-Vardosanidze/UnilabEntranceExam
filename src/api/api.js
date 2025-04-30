const API_BASE = "https://6807cb21942707d722dc723c.mockapi.io";

export const fetchCards = async () => {
  const response = await fetch(`${API_BASE}/t-shirts`);

  if (!response.ok) {
    throw new Error("Failed to fetch Blog");
  }
  return response.json();
};

export const fetchComent = async () => {
  const response = await fetch(`${API_BASE}/feedBack`);

  if (!response.ok) {
    throw new Error("Failed to fetch Blog");
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
    throw new Error("Failed to create Blog");
  }
  return response.json();
};
