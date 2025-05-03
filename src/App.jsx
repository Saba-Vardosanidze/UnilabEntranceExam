import Category from "./views/Category";
import CreateReview from "./views/CreateReview";
import Home from "./views/Home";
import Product from "./views/Product";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./views/Register";
import LogInPage from "./views/LogInPage";
import Complate from "./components/complate/Complate";

const App = () => {
  return (
    <div className="font-satoshi">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/createreview" element={<CreateReview />} />
        <Route path="/category" element={<Category />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/complate" element={<Complate />} />
      </Routes>
    </div>
  );
};

export default App;
