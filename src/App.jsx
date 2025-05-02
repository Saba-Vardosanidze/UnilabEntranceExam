import Category from "./views/Category";
import CreateReview from "./views/CreateReview";
import Home from "./views/Home";
import Product from "./views/Product";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/createreview" element={<CreateReview />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
