import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Banner = () => {
  return (
    <div className="w-full grid grid-cols-2">
      {/* left section */}
      <LeftSection />

      {/* right section */}
      <RightSection />
    </div>
  );
};

export default Banner;
