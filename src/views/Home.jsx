import Arrivals from "../components/arrivals/Arrivals";
import BrandSlider from "../components/brandSlider/BrandSlider";
import DressStyle from "../components/dressStyle/DressStyle";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import HeroSection from "../components/heroSection/HeroSection";
import Offers from "../components/offers/Offers";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Selling from "../components/selling/Selling";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <PromoBanner />
        <Header />
        <HeroSection />
        <BrandSlider />
        <Arrivals />
        <Selling />
        <DressStyle />
        <Slider />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default Home;
