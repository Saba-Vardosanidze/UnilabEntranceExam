import Header from "../components/Header/Header";
import HeroSection from "../components/heroSection/HeroSection";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import Slider from "../components/slider/Slider";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main>
        <PromoBanner />
        <Header />
        <HeroSection />
        <Slider />
      </main>
    </div>
  );
};

export default Home;
