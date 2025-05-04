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
import CartPage from "./views/CartPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div className="font-satoshi">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product/:id"
          element={
            <PublicRoute>
              <Product />
            </PublicRoute>
          }
        />
        <Route
          path="/createreview"
          element={
            <PublicRoute>
              <CreateReview />
            </PublicRoute>
          }
        />
        <Route
          path="/category"
          element={
            <PublicRoute>
              <Category />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LogInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/complate"
          element={
            <PublicRoute>
              <Complate />
            </PublicRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
