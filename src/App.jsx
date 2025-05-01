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
        <Route path="/product" element={<Product />} />
        <Route path="/createreview" element={<CreateReview />} />
      </Routes>
    </>
  );
};

export default App;
