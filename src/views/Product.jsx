import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import MightLike from "../components/MightLike/MightLike";
import Offers from "../components/offers/Offers";
import ProductDetail from "../components/productDetail/ProductDetail";
import PromoBanner from "../components/PromoBanner/PromoBanner";

const Product = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <PromoBanner />
        <Header />
        <ProductDetail />
        <MightLike />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default Product;
