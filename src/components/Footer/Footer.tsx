import ListStyleBox from "../../shared/ListStyleBox";

const Footer = () => {
  const navItems: string[] = ["About.", "Service.", "Tools.", "Contacts."];
  const langItems: string[] = ["En", "Es", "Fr", "De", "Ru"];
  return (
    <footer className="bg-darkSecondary h-186">
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
        <ListStyleBox items={navItems} activeItems="About." />
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
          <ListStyleBox items={langItems} activeItems="En" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
