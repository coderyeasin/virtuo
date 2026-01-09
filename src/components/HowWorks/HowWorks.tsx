import { FaArrowRight } from "react-icons/fa6";
import fourHalf from "/assets/images/four-half.png";

const HowWorks = () => {
  return (
    <section className="py-20 bg-radial-[at_50%_50%] from-primary/70 via-TextPrimary to-TextPrimary to-70% w-full">
      <div className="">
        <h3 className="font-montserrat font-semibold text-5xl text-black ml-65 py-20">
          How it’s <span className="text-primary">works?</span>
        </h3>
        <div className="flex justify-center items-center gap-33 ">
          <div className="bg-[url(/assets/images/fourth-shape.png)] bg-cover bg-no-repeat w-183 h-80 flex justify-between py-3">
            <div className="px-10 py-7">
              <p className="font-poppins text-darkSecondary text-center bg-TextPrimary px-2 py-3 mb-5 rounded-full w-22">
                Step 01
              </p>
              <p className="font-poppins text-TextPrimary text-[40px]">
                Sign Up & <br />
                Create Your <br /> Avatar
              </p>
            </div>
            <div>
              <img className=" w-72.75 h-75 mr-2" src={fourHalf} alt="" />
            </div>
          </div>
          <div className="w-129 h-68.75 bg-darkSecondary rounded-[30px] flex items-center mt-12 p-2">
            <div className="w-33.25 h-63.75 bg-offWhite rounded-[20px]"></div>
            <div className="w-74 space-y-5 ml-14">
              <p className="font-poppins text-TextPrimary text-xl">
                Create a personalized <br /> account and design your <br />{" "}
                avatar for the metaverse.
              </p>
              <button className="font-poppins font-semibold text-xl bg-radial-[at_25%_25%] from-primary to-secondary to-75% py-3 px-6 rounded-3xl cursor-pointer">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-start gap-105 py-10">
        <div className="space-y-5">
          <h3 className="font-poppins text-primary font-bold text-xl">
            Step 02
          </h3>
          <p className="font-poppins text-2xl text-darkSecondary">
            Explore immersive worlds <br /> and vibrant hubs.
          </p>
        </div>
        <div className="flex items-center gap-3 border-2 border-primary rounded-[51px] px-2 py-2">
          <button className="font-poppins text-TextPrimary bg-primary text-xl py-2 px-7 rounded-[51px] cursor-pointer">
            Next
          </button>
          <FaArrowRight className="text-2xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
