import { IoArrowForward } from "react-icons/io5";
import { BsBrowserChrome } from "react-icons/bs";
import { FiHardDrive } from "react-icons/fi";
import { GrCube } from "react-icons/gr";
import { FaPlay } from "react-icons/fa6";

const RightSection = () => {
  const commonBoxStyles =
    "h-10 w-10 bg-primary border-4 border-gray-400 rounded-full flex justify-center items-center";
  return (
    <section className="relative">
      <aside className="bg-offWhite place-items-center w-6/12 mr-0 rounded-br-[40px] absolute top-0 h-160 right-64">
        <div className="absolute -left-36 top-50 bg-primary/20 ring-2 ring-primary p-4 rounded-2xl">
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
          <p className="absolute top-7 -right-12  border-2 border-white w-20"></p>
          <p className="absolute top-0 -right-29 -rotate-45  border-2 border-white w-20"></p>
          <p className="absolute -top-7 -right-46 border-2 border-white w-20"></p>
        </div>
        <div className="flex gap-5 absolute bottom-10">
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
      <div className="absolute -bottom-22 right-0 w-full ">
        <div className="relative w-214 h-42.25">
          <div className="bg-offWhite rounded-tr-[3rem] rounded-br-[3rem] rounded-bl-[3rem] rounded-tl-[9rem] flex justify-center items-center border-14 border-TextPrimary p-2">
            <div className="bg-primary/70 h-28 w-28 rounded-full flex justify-center items-center">
              <p className="text-xl bg-secondary h-20 w-20 rounded-full flex justify-center items-center">
                <FaPlay className="text-5xl" />
              </p>
            </div>
          </div>
          {/* <p className="bg-TextPrimary w-14 h-14 rounded-tl-4xl absolute -top-9 left-11 rotate-19 z-30"></p> */}
        </div>
      </div>
    </section>
  );
};

export default RightSection;
