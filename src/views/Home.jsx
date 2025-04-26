import HeroSection from "../components/heroSection/HeroSection";
import PromoBanner from "../components/PromoBanner";

const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main>
        <PromoBanner />
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
