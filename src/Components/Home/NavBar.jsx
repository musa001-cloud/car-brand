import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/dffd.png";
import { MdMenu, MdClose } from "react-icons/md";

const navItems = [
  { name: "Models", path: "/models" },
  { name: "Performance", path: "/performance" },
  { name: "Heritage", path: "/heritage" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

// Desktop link styles
const desktopLinkClass = ({ isActive }) =>
  `relative whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
    isActive
      ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-green-500"
      : "text-gray-400 hover:text-white"
  }`;

// Mobile link styles
const mobileLinkClass = ({ isActive }) =>
  `flex min-h-[48px] items-center border-b border-gray-800 text-sm font-medium transition-colors duration-300 ${
    isActive
      ? "border-l-2 border-l-green-500 pl-3 text-green-500"
      : "text-gray-300 hover:text-white"
  }`;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  const handleBooking = () => {
    closeMenu();
    navigate("/contact");
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 text-white shadow-md backdrop-blur-md">
      {/* MAIN NAVBAR */}
      <div className="mx-auto flex min-h-[70px] w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* LOGO + BRAND */}
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <img
            className="h-10 w-10 rounded-md border border-gray-400 object-cover transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11 md:h-12 md:w-12"
            src={Logo}
            alt="Apex Motors logo"
          />
          <h1 className="font-['Instrument_Serif'] text-xl font-semibold tracking-wide sm:text-2xl md:text-3xl">
            APEX MOTORS
          </h1>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={desktopLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden shrink-0 lg:block">
          <button
            type="button"
            onClick={handleBooking}
            className="rounded-md border border-gray-600 px-4 py-2.5 text-xs font-medium tracking-wide text-gray-200 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black xl:px-5 xl:text-sm"
          >
            BOOK CONSULTATION
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-700 text-gray-200 transition-all duration-300 hover:border-green-500 hover:text-green-500 lg:hidden"
        >
          {menuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-gray-800 bg-black transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={mobileLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={handleBooking}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 w-full rounded-md border border-gray-700 px-4 py-3 text-sm font-medium text-gray-200 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black"
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;