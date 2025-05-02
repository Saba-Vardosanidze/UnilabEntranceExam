import AllProduct from "../components/allProduct/AllProduct";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Offers from "../components/offers/Offers";
import PromoBanner from "../components/PromoBanner/PromoBanner";

const Category = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <PromoBanner />
        <Header />
        <div>
          <AllProduct />
        </div>
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default Category;
