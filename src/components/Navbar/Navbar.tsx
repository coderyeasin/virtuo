import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { label: "Platform", icon: <IoIosArrowDropdown /> },
  { label: "About Us" },
  { label: "Services" },
  { label: "Metavers" },
  { label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const commonClasses =
    "bg-secondary px-6 py-1.5 font-poppins rounded-full text-TextPrimary text-xl cursor-pointer hover:bg-primary flex items-center gap-3 transition-colors duration-200";

  return (
    <header className="w-full pt-10 pb-5 flex justify-between items-center px-6 md:px-16 lg:px-24">
      <div className="text-TextPrimary font-bold text-3xl md:text-5xl">
        Virtuo.
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex space-x-6">
          {navLinks.map((link, idx) => (
            <li
              key={link.label}
              className={`${commonClasses} ${idx === 0 ? "!bg-primary" : ""}`}
            >
              {link.label}
              {link.icon && link.icon}
            </li>
          ))}
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-TextPrimary text-4xl focus:outline-none z-50"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>
      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-darkSecondary shadow-lg z-40 transform transition-transform duration-300 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-6 mt-32 px-8">
          {navLinks.map((link, idx) => (
            <li
              key={link.label}
              className={`${commonClasses} w-full justify-between ${idx === 0 ? "!bg-primary" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
              {link.icon && link.icon}
            </li>
          ))}
        </ul>
      </nav>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Navbar;
