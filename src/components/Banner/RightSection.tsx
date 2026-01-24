import { IoArrowForward } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { FiHardDrive } from "react-icons/fi";
import { GrCube } from "react-icons/gr";
import { FaPlay } from "react-icons/fa6";

const RightSection = () => {
  const commonBoxStyles =
    "h-10 w-10 bg-primary border-4 border-gray-400 rounded-full flex justify-center items-center";
  return (
    <section className="relative lg:pb-0 pb-30">
      <aside className="bg-offWhite place-items-center w-6/12 rounded-br-[40px] lg:absolute lg:top-0 lg:right-64 lg:h-160 h-120 mx-auto lg:mx-0">
        <div className="absolute lg:-left-36 lg:top-50 top-20 left-15  bg-primary/20 ring-2 ring-primary p-4 rounded-2xl">
          <div className="relative bg-radial-[at_25%_25%] from-primary to-secondary to-75% w-40 h-auto rounded-2xl px-4 py-4">
            <div className="font-poppins text-xl font-medium  space-y-3">
              <h3 className="border-b-2 border-secondary pb-3">Connect</h3>
              <h3>Collaborate</h3>
            </div>
          </div>
          <div className="flex justify-between items-center pt-2">
            <a href="#" className="text-primary underline">
              View More
            </a>
            <BsBrowserChrome className="cursor-pointer" />
          </div>
          <p className="bg-white shadow-lg shadow-gray-50 w-5 h-5 rounded-full absolute top-5 right-5 -rotate-90"></p>
          <p className="absolute top-7.5 -right-11 border-t border-white w-20"></p>
          <p className="absolute -top-7 -right-16 border-r border-white w-14 h-14 rounded-br-[20px] rotate-35"></p>
          <p className="absolute -top-3 -right-43 border-t border-white w-26 h-20 rounded-tl-[20px]"></p>
        </div>
        <div className="flex gap-5 absolute lg:bottom-10 top-7/12">
          <div className="flex flex-col gap-3">
            <div className={commonBoxStyles}>
              <FiHardDrive className="text-xl" />
            </div>
            <div className={commonBoxStyles}>
              <GrCube className="text-xl" />
            </div>
          </div>
          <div className="relative bg-radial-[at_25%_25%] from-primary to-secondary to-75% w-50 h-24 rounded-2xl px-4 py-4">
            <p className="font-poppins text-xl font-medium">
              Global <br /> Connectivity
            </p>
            <p className="bg-gray-400 w-10 h-10 rounded-tl-4xl absolute top-0 right-0 -rotate-90"></p>
            <IoArrowForward className="absolute top-2 right-2 text-xl" />
          </div>
        </div>
      </aside>
      <div className="absolute lg:-bottom-22 lg:right-0 left-0 top-10/12 lg:w-full mx-auto lg:mx-0">
        <div
          className="relative bg-offWhite rounded-tr-[4rem] rounded-br-[4rem] rounded-bl-[4rem] 
          rounded-tl-[9rem] border-20 border-TextPrimary"
        >
          <div className=" flex justify-center items-center lg:w-222 lg:h-42.25 w-160 h-30">
            <div className="bg-primary/70 lg:h-28 lg:w-28 h-20 w-20 rounded-full flex justify-center items-center">
              <p className="text-xl bg-secondary h-14 w-14 lg:h-20 lg:w-20 rounded-full ring-4 ring-primary/90 flex justify-center items-center">
                <FaPlay className="text-3xl lg:text-5xl" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSection;
