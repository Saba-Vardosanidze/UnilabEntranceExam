import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Offers from "../components/offers/Offers";
import Registration from "../components/registration/Registration";

const Register = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Registration />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default Register;
