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
      <div className=" bg-radial-[at_-5%_-20%] from-white via-[#000A03] to-[#061F0D] to-95%">
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
