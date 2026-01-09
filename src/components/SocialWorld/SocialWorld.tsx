import { FaLaptopCode } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

const SocialWorld = () => {
  return (
    <section className="py-40">
      <h1 className="font-montserrat font-semibold text-5xl text-black text-center">
        Metaverse, Meet Your <br /> Social World
      </h1>
      <div className="flex justify-center my-20 w-full ">
        <div className="border-2 border-primary p-4 rounded-4xl relative">
          <div className="bg-[url(../../src/assets/images/first-shape.png)] w-xl h-lg bg-cover pl-10 py-7 space-y-20 rounded-4xl">
            <h1 className="font-montserrat font-bold text-4xl">
              Virtual <br /> World <br /> Creation
            </h1>
            {/* <img src="../../src/assets/images/first-shape.png" alt="" /> */}

            <div className=" bg-primary/20 ring-2 ring-primary p-4 rounded-2xl w-5/7 mb-20">
              <div className="bg-radial-[at_25%_25%] from-primary to-secondary to-75% w-full rounded-2xl px-5 py-4">
                <div className="font-poppins text-xl">
                  <p>
                    Empower users to create and <br /> customize their
                    metaverse.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="bg-TextPrimary rounded-2xl h-16 w-16 absolute top-8 right-8 flex justify-center items-center">
            <IoIosArrowDropright className="text-3xl text-primary" />
          </p>
        </div>
        <div className="w-5/12 flex justify-center relative">
          <div className="bg-[url(../../src/assets/images/second-shape.png)] bg-contain bg-no-repeat bg-center w-full h-full ">
            <div className="relative">
              <img
                src="../../src/assets/images/third-shape.png"
                className="ml-28 pt-5"
                alt=""
              />
              <p className="h-16 w-16 bg-TextPrimary/40 rounded-full flex justify-center items-center absolute bottom-8 left-36">
                <FaLaptopCode className="text-5xl text-secondary  bg-TextPrimary rounded-full p-2 " />
              </p>
            </div>
          </div>
          <div className="absolute right-40 top-16 text-TextPrimary space-y-14">
            <h1 className="text-4xl font-bold">
              Virtual <br /> Events <br /> Hosting
            </h1>
            <p className="font-poppins text-xl">
              Provide tools for virtual <br /> concerts, conferences, <br /> and
              workshops.
            </p>
            <button className="font-poppins font-semibold text-xl bg-radial-[at_25%_25%] from-primary to-secondary to-75% py-4 px-6 rounded-3xl cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialWorld;
