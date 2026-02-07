import { FaLaptopCode } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import thirdShape from "/assets/images/third-shape.png";

const SocialWorld = () => {
  return (
    <section className="py-40">
      <h1 className="font-montserrat font-semibold text-2xl lg:text-5xl text-black text-center">
        Metaverse, Meet Your <br /> Social World
      </h1>
      <div
        className="
        flex flex-col lg:flex-row
        justify-center items-center lg:items-start
        gap-20 lg:gap-40
        my-16 lg:my-20
        w-80 sm:100 md:120 mx-auto lg:mx-0 lg:w-full"
      >
        <div className="border-2 border-primary p-4 rounded-4xl relative lg:w-4.5/12 ">
          <div
            className=" w-full
          bg-[url(/assets/images/first-shape.png)] bg-cover lg:bg-contain bg-no-repeat lg:bg-center lg:w-xl lg:h-lg  
          pl-10 py-7 space-y-20 rounded-4xl 
          
                 
          "
          >
            <h1 className="font-montserrat font-bold text-4xl">
              Virtual <br /> World <br /> Creation
            </h1>

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
          <p className="bg-TextPrimary rounded-2xl h-16 w-16 absolute top-10 right-6 lg:top-8 lg:right-8 flex justify-center items-center">
            <IoIosArrowDropright className="text-3xl text-primary" />
          </p>
        </div>
        <div
          className="bg-[url(/assets/images/second-shape.png)] 
        bg-contain bg-no-repeat bg-center lg:w-156.5 h-122.25 md:w-120 w-90 sm:100 md:120"
        >
          <div className="flex gap-5 lg:gap-0 p-5 relative">
            <div className="relative">
              <img
                src={thirdShape}
                className="w-50 lg:w-69.5 h-112.25 object-contain"
                alt="inner_shape"
              />
              <p className="h-16 w-16 bg-TextPrimary/40 rounded-full flex justify-center items-center absolute bottom-28 md:bottom-18 left-10 lg:bottom-8 lg:left-10">
                <FaLaptopCode className="text-5xl text-secondary  bg-TextPrimary rounded-full p-2 " />
              </p>
            </div>

            <div className="text-TextPrimary lg:space-y-14 space-y-5 lg:absolute lg:left-80 pt-10 px-5 mt-14 lg:mt-0">
              <h1 className="text-sm sm:text-md md:text-xl lg:text-4xl font-bold">
                Virtual <br /> Events <br /> Hosting
              </h1>
              <p className="font-poppins text-sm sm:text-md md:text-xl">
                Provide tools for virtual <br /> concerts, conferences, <br />{" "}
                and workshops.
              </p>
              <button className="font-poppins font-semibold text-sm md:text-xl bg-radial-[at_25%_25%] from-primary to-secondary to-75% py-1 px-5 sm:py-2 sm:px-3 md:py-4 md:px-6 lg:py-4 lg:px-6 rounded-3xl cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialWorld;
