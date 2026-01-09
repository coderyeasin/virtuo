// header --- linear shed
// bg-linear-to-bl from-darkSecondary via-offWhite to-primary h-[744px]

const Footer = () => {
  return (
    <footer className="bg-darkSecondary h-[744px]">
      <section className="flex justify-evenly items-center gap-10 py-30">
        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="border-0 outline-none ring-0 focus:outline-none focus:ring-0 focus:border-0 bg-[#061F0D] rounded-[30px] px-3.75 py-5"
            placeholder="Enter your email address"
          />
          <button className="font-poppins font-bold text-TextPrimary bg-radial-[at_25%_25%] from-primary to-secondary to-75% text-xl py-4 px-5 rounded-[51px] cursor-pointer">
            Contact us
          </button>
        </div>
        <div>
          <nav className="list-none flex gap-5 font-poppins text-xl">
            <li className="text-primary">About.</li>
            <li className="text-TextPrimary">Service.</li>
            <li className="text-TextPrimary">Tools.</li>
            <li className="text-TextPrimary">Contacts.</li>
          </nav>
        </div>
      </section>
      <section className="flex justify-around items-end py-20">
        <div>
          <h3 className="text-5xl font-bold text-TextPrimary">Virtuo.</h3>
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="font-poppins font-medium text-xl text-TextPrimary pb-3">
              Contact Us
            </h3>
            <p className="font-poppins text-xl text-TextPrimary">
              +1 (999) 888-77-66
            </p>
            <p className="font-poppins text-xl text-TextPrimary">
              hello@niskalastd.com
            </p>
          </div>
          <div>
            <h3 className="font-poppins font-medium text-xl text-TextPrimary pb-3">
              Locations
            </h3>
            <p className="font-poppins text-xl text-TextPrimary">
              483920, Indonesia,
            </p>
            <p className="font-poppins text-xl text-TextPrimary">
              Lampung 22/2/5, Office 4
            </p>
          </div>
        </div>
        <div>
          <h3 className="font-poppins text-xl pb-5 text-right">Languages</h3>
          <nav className="list-none flex gap-5 font-poppins text-xl">
            <li className="text-primary">En</li>
            <li className="text-TextPrimary">Es</li>
            <li className="text-TextPrimary">Fr</li>
            <li className="text-TextPrimary">De</li>
            <li className="text-TextPrimary">Ru</li>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
