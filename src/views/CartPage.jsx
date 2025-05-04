import Cart from "../components/cart/cart";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Offers from "../components/offers/Offers";

const CartPage = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <Header />
        <Cart />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default CartPage;
