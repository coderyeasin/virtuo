import { FaArchive } from "react-icons/fa";

const CapsuleBox = ({ value }: { value: string }) => {
  return (
    <p className="font-poppins text-black bg-TextPrimary rounded-full px-4 py-2 grid place-items-center">
      {value}
    </p>
  );
};

const MetaVerse = () => {
  return (
    <section className="py-20">
      <div className="relative pb-50">
        <h1 className="font-montserrat font-semibold text-4xl lg:text-5xl text-black text-center">
          Learn and Grow in <br /> the
          <span className="text-primary"> Metaverse</span>
        </h1>
        <p className="hidden lg:block absolute lg:-left-30 md:-left-60 -top-30 bg-offWhite w-85.75 h-79.5 rounded-[30px]"></p>
        <p className="hidden lg:block absolute md:right-16 lg:right-0 -top-20 bg-offWhite lg:w-48.5 lg:h-45.25 w-16 h-45.25 rounded-bl-[30px] rounded-tl-[30px]"></p>
      </div>
      <div
        className="bg-offWhite rounded-[40px] lg:w-full
  max-w-md
  sm:w-100
  md:w-120
  lg:max-w-5xl h-120 p-4 flex flex-col justify-between mx-12 mx-auto w-80"
      >
        <div className="flex justify-between items-center p-3">
          <p className="bg-offWhite border-2 border-white p-2 rounded-full">
            <FaArchive className="text-2xl" />
          </p>
          <div className="bg-[#04170A] p-3 w-40 rounded-full flex justify-evenly items-center">
            <p className="font-poppins lg:text-xl text-md">
              360° <br />
              View
            </p>
            <p className="bg-primary border-10 border-TextPrimary p-3 rounded-full">
              <FaArchive className="text-2xl" />
            </p>
          </div>
        </div>

        <div className="bg-TextPrimary/40 w-full p-4 rounded-full flex flex-wrap lg:flex-row justify-center">
          <CapsuleBox value="Monetize" />
          <CapsuleBox value="Virtual Reality" />
          <CapsuleBox value="Game" />
          <CapsuleBox value="Learn" />
          <CapsuleBox value="Create" />
          <CapsuleBox value="Blockhain" />
          <CapsuleBox value="Metaverse" />
          <CapsuleBox value="Worlds" />
          <CapsuleBox value="Vision" />
          <CapsuleBox value="Thrive" />
        </div>
      </div>
      <div className="relative hidden lg:block">
        <p className="absolute left-0 -bottom-18 bg-offWhite w-48.5 h-45.25 rounded-tr-[30px] rounded-br-[30px]"></p>
        <p className="absolute right-0 -bottom-30 bg-offWhite w-48 h-79.5 rounded-bl-[30px] rounded-tl-[30px]"></p>
      </div>
    </section>
  );
};

export default MetaVerse;
