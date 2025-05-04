import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const client = new QueryClient();
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
