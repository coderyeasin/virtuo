import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const commonClasses =
    "bg-secondary px-6 py-1.5 font-poppins rounded-full text-TextPrimary text-xl cursor-pointer hover:bg-primary flex items-center gap-3";
  return (
    <section className="w-full pt-10 pb-5 flex justify-around items-center">
      <div className="text-TextPrimary font-bold text-5xl">Virtuo.</div>
      <nav>
        <ul className="flex space-x-6">
          <li
            className={`${commonClasses} !bg-primary flex items-center gap-3`}
          >
            Platform
            <IoIosArrowDropdown />
          </li>
          <li className={commonClasses}>About Us</li>
          <li className={commonClasses}>Services</li>
          <li className={commonClasses}>Metavers</li>
          <li className={commonClasses}>Contact</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
