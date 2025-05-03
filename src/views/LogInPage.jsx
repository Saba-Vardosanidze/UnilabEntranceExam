import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Login from "../components/login/LogIn";
import Offers from "../components/offers/Offers";

const LogInPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Login />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default LogInPage;
