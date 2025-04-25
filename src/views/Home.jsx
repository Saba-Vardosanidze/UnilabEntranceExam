import Header from "../components/Header/Header";
import PromoBanner from "../components/PromoBanner/PromoBanner";
const Home = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main>
        <PromoBanner />
        <Header />
      </main>
    </div>
  );
};

export default Home;
