import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import SocialWorld from "../SocialWorld/SocialWorld";
import MetaVerse from "../MetaVerse/MetaVerse";
import ChooseUs from "../ChooseUs/ChooseUs";
import HowWorks from "../HowWorks/HowWorks";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <main className="">
      <div className="bg-linear-to-tl from-[#061F0D] via-[#000A03] lg:via-65% md:via-77% to-offWhite to-80%">
        <Navbar />
        <Banner />
      </div>
      <SocialWorld />
      <MetaVerse />
      <ChooseUs />
      <HowWorks />
      <Footer />
    </main>
  );
};

export default Home;
