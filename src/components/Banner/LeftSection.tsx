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
    <section className="w-full grid pt-40">
      <h1 className="font-montserrat font-light tracking-wider lg:text-8xl text-5xl text-center lg:ml-9 mb-3">
        Explore
      </h1>
      <div className="space-y-5 lg:bg-linear-to-r from-[#020f06] to-[#011106] text-center">
        <div className="flex justify-center items-center gap-6 lg:ml-7">
          <div className="hidden bg-[#061F0D]/80 rounded-4xl md:flex items-center p-2 lg:max-w-48 max-w-40">
            <p className="bg-offWhite w-11 h-11 rounded-full"></p>
            <BoxStyles className={circleStyles} />
            <BoxStyles className={circleStyles} />
            <BoxStyles className={circleStyles} />
            <p className="bg-[#135426]/20 w-11 h-11 rounded-full -ml-3 border-2 border-secondary flex justify-center items-center text-TextPrimary">
              <MdOutlineArrowOutward className="text-2xl" />
            </p>
          </div>

          <p className="font-montserrat font-light lg:text-8xl text-5xl">
            Infinite
          </p>
        </div>
        <p className="font-montserrat font-light lg:text-8xl text-5xl text-center">
          Metaverse
        </p>
        <button className="font-poppins lg:mr-73 mb-15 lg:mb-0 font-semibold text-xl drop-shadow-2xl drop-shadow-primary/50 bg-radial-[at_25%_25%] from-primary to-secondary to-75% py-5 px-6 rounded-3xl mt-10 hover:scale-105 transition-transform cursor-pointer">
          Get Started
        </button>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center gap-10 py-5 lg:gap-24 lg:pt-30 lg:pb-5 lg:ml-35 md:py-20">
        <ProductInfo firstValue="230M" secondValue="User" thirdValue="+" />
        <ProductInfo firstValue="12y" secondValue="Experience" thirdValue="" />
        <ProductInfo firstValue="98M" secondValue="Asset" thirdValue="+" />
        <IoArrowForward className="text-3xl" />
      </div>
    </section>
  );
};

export default LeftSection;
