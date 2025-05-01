import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import NewPosts from "../components/newPosts/NewPosts";
import Offers from "../components/offers/Offers";
import PromoBanner from "../components/PromoBanner/PromoBanner";

const CreateReview = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <PromoBanner />
        <Header />
        <NewPosts />
      </main>
      <Footer>
        <Offers />
      </Footer>
    </div>
  );
};

export default CreateReview;
