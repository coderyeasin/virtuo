import { IoArrowForward } from "react-icons/io5";
import { MdOutlineArrowOutward } from "react-icons/md";

const BoxStyles = ({ className }: { className?: string }) => {
  return <p className={className}></p>;
};

const ProductInfo = ({
  firstValue,
  secondValue,
  thirdValue,
}: {
  firstValue: string;
  secondValue: string;
  thirdValue: string | null;
}) => {
  return (
    <div className="space-y-2">
      <p className="font-montserrat font-medium text-4xl">
        {firstValue}
        <span className="text-primary text-3xl">{thirdValue}</span>
      </p>
      <p className="text-primary text-md font-poppins">{secondValue}</p>
    </div>
  );
};

const LeftSection = () => {
  const circleStyles =
    "bg-offWhite w-11 h-11 rounded-full border-2 border-secondary -ml-3";

  return (
    <section className="grid pt-40">
      <h1 className="font-montserrat font-light tracking-wider text-8xl text-center ml-9 mb-3">
        Explore
      </h1>
      <div className="space-y-5 bg-linear-to-r from-[#020f06] to-[#011106] text-center">
        <div className="flex justify-center items-center gap-6 ml-7">
          <div className="bg-[#061F0D]/80 rounded-4xl flex items-center p-2 max-w-48">
            <p className="bg-offWhite w-11 h-11 rounded-full"></p>
            <BoxStyles className={circleStyles} />
            <BoxStyles className={circleStyles} />
            <BoxStyles className={circleStyles} />
            <p className="bg-[#135426]/20 w-11 h-11 rounded-full -ml-3 border-2 border-secondary flex justify-center items-center text-TextPrimary">
              <MdOutlineArrowOutward className="text-2xl" />
            </p>
          </div>

          <p className="font-montserrat font-light text-8xl">Infinite</p>
        </div>
        <p className="font-montserrat font-light text-8xl text-center">
          Metaverse
        </p>
        <button className="font-poppins mr-73 font-semibold text-xl drop-shadow-2xl drop-shadow-primary/50 bg-radial-[at_25%_25%] from-primary to-secondary to-75% py-5 px-6 rounded-3xl mt-10 hover:scale-105 transition-transform cursor-pointer">
          Get Started
        </button>
      </div>
      <div className="flex justify-center items-center gap-24 pt-30 pb-5 ml-35">
        <ProductInfo firstValue="230M" secondValue="User" thirdValue="+" />
        <ProductInfo firstValue="12y" secondValue="Experience" thirdValue="" />
        <ProductInfo firstValue="98M" secondValue="Asset" thirdValue="+" />
        <IoArrowForward className="text-3xl" />
      </div>
    </section>
  );
};

export default LeftSection;
