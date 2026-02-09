import { BsArrowRight } from "react-icons/bs";
import { FaArrowAltCircleDown } from "react-icons/fa";

const CardStyles = ({
  id,
  gradientCls,
  title,
  heading,
  subHeading,
}: {
  id: string;
  gradientCls: string;
  title: string;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div
      className={`${gradientCls} flex flex-col justify-around px-7 w-80 sm:100 md:102 lg:w-102  h-103.5 rounded-[20px]`}
    >
      <div className="flex justify-between items-center">
        <p className="text-TextPrimary font-poppins text-xl">{id}</p>
        <p className="w-12 h-12 border-2 border-white bg-primary/40 rounded-full flex justify-center items-center">
          <FaArrowAltCircleDown className="bg-TextPrimary p-2 text-[30px] rounded-full text-primary" />
        </p>
      </div>
      <div>
        <h3
          className={`${
            title === "Powered" ? "text-primary" : "text-TextPrimary "
          } font-poppins text-xl font-semibold text-TextPrimary `}
        >
          {title}
        </h3>
        <h3 className="font-poppins text-[2rem] font-semibold text-TextPrimary">
          {heading} <br /> {subHeading}
        </h3>
      </div>
      <div className="flex gap-5 items-center pt-2">
        <a href="#" className="text-TextPrimary underline font-poppins text-xl">
          Explore more
        </a>
        <BsArrowRight className="cursor-pointer bg-primary rounded-full text-4xl p-2" />
      </div>
    </div>
  );
};

const ChooseUs = () => {
  return (
    <section className="lg:pt-40">
      <div className="flex flex-col lg:flex-row space-y-7 lg:space-y-0 justify-around items-center text-center lg:text-justify">
        <div className="space-y-5 text-center lg:text-justify">
          <h3 className="lg:text-2xl text-xl text-primary font-poppins">
            Why choose us
          </h3>
          <h1 className="lg:text-5xl text-2xl text-black font-montserrat">
            Accessible Metaverse, <br /> Anytime,{" "}
            <span className="text-primary">Anywhere</span>
          </h1>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl text-black font-poppins font-semibold">
            Monetize Your Virtual Dreams
          </h3>
          <p className="text-xl text-black font-poppins max-w-[408px]">
            A platform designed for all devices, <br /> delivering seamless
            access and <br />
            optimized performance to keep you <br /> connected to your digital
            universe.
          </p>
        </div>
      </div>
      {/* card section */}
      <div className="py-20 relative ">
        <div className="flex flex-col lg:flex-row lg:gap-20 justify-center items-center relative">
          <CardStyles
            id="0/2"
            title="Metaverse"
            heading="Immersive"
            subHeading="Experiences"
            gradientCls="bg-linear-to-t from-darkSecondary to-offWhite"
          />
          <CardStyles
            id="03/"
            title="Powered"
            heading="Innovative"
            subHeading="Technology"
            gradientCls="bg-linear-to-t from-darkSecondary to-darkSecondary mt-20 "
          />
          <CardStyles
            id="04/"
            title="Social hubs"
            heading="Global"
            subHeading="Connectivity"
            gradientCls="bg-linear-to-t from-darkSecondary to-offWhite mt-20"
          />
          <p className="hidden lg:block bg-linear-to-t from-darkSecondary to-darkSecondary mt-20 w-20 h-103.5 rounded-bl-[20px] rounded-tl-[20px] absolute right-0"></p>
          <p className="hidden lg:block bg-linear-to-t from-darkSecondary to-darkSecondary mt-20 w-20 h-103.5 rounded-tr-[20px] rounded-br-[20px] absolute left-0"></p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
