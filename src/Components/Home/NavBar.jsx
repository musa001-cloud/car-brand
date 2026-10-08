import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/dffd.png";
import { FaSearch } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";

const navItems = [
  { name: "Models", path: "/models" },
  { name: "Performance", path: "/performance" },
  { name: "Heritage", path: "/heritage" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

const desktopLinkClass = ({ isActive }) =>
  `relative whitespace-nowrap text-sm font-medium transition-colors duration-300 ${
    isActive
      ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-green-500"
      : "text-gray-400 hover:text-white"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `flex min-h-[48px] items-center border-b border-gray-800 text-sm font-medium transition-all duration-300 ${
    isActive
      ? "border-l-2 border-l-green-500 pl-3 text-green-500"
      : "text-gray-300 hover:border-l-2 hover:border-l-gray-600 hover:pl-3 hover:text-white"
  }`;

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleBooking = () => {
    closeMenu();
    navigate("/contact");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    // Don't search if the input is empty
    if (!query) return;

    navigate(`/search?query=${encodeURIComponent(query)}`);

    setSearch("");
    setSearchOpen(false);
    closeMenu();
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearch("");
  };

  // Close mobile menu when switching to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/95 text-white shadow-md backdrop-blur-md"
      aria-label="Main navigation"
    >
      {/* ==================== MAIN NAVBAR ==================== */}
      <div className="mx-auto flex min-h-[70px] w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* ==================== LOGO ==================== */}
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Apex Motors Home"
        >
          <img
            src={Logo}
            alt="Apex Motors logo"
            className="h-10 w-10 rounded-md border border-gray-700 object-cover transition-transform duration-300 hover:scale-105 sm:h-11 sm:w-11 md:h-12 md:w-12"
          />

          <h1 className="font-['Instrument_Serif'] text-xl font-semibold tracking-wide sm:text-2xl md:text-3xl">
            APEX MOTORS
          </h1>
        </NavLink>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={desktopLinkClass}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* ==================== DESKTOP ACTIONS ==================== */}
        <div className="hidden shrink-0 items-center gap-4 lg:flex">
          {/* SEARCH */}
          <div className="flex items-center">
            {searchOpen && (
              <form
                onSubmit={handleSearch}
                className="mr-2 flex items-center overflow-hidden rounded-full border border-gray-700 bg-gray-900 transition-all duration-300 focus-within:border-green-500"
              >
                <FaSearch
                  size={14}
                  className="ml-3 text-gray-400"
                  aria-hidden="true"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  aria-label="Search models"
                  autoFocus
                  className="w-32 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500 xl:w-40"
                />

                <button
                  type="submit"
                  disabled={!search.trim()}
                  className="px-3 py-2 text-xs font-medium text-gray-400 transition-colors hover:text-green-500 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  GO
                </button>
              </form>
            )}

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              className="group flex h-10 w-10 items-center justify-center rounded-full text-gray-300 transition-all duration-300 hover:bg-gray-900 hover:text-green-500"
            >
              {searchOpen ? (
                <MdClose
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <FaSearch
                  size={15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              )}
            </button>
          </div>

          {/* BOOK CONSULTATION */}
          <button
            type="button"
            onClick={handleBooking}
            className="rounded-md border border-gray-600 px-4 py-2.5 text-xs font-medium tracking-wide text-gray-200 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black xl:px-5 xl:text-sm"
          >
            BOOK CONSULTATION
          </button>
        </div>

        {/* ==================== MOBILE MENU BUTTON ==================== */}
        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-gray-700 text-gray-200 transition-all duration-300 hover:border-green-500 hover:text-green-500 lg:hidden"
        >
          {menuOpen ? <MdClose size={27} /> : <MdMenu size={27} />}
        </button>
      </div>

      {/* ==================== MOBILE MENU ==================== */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`overflow-hidden border-t border-gray-800 bg-black transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "max-h-[700px] translate-y-0 opacity-100"
            : "max-h-0 -translate-y-2 border-t-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col px-4 py-4 sm:px-6">
          {/* MOBILE SEARCH */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex items-center rounded-md border border-gray-700 bg-gray-900 focus-within:border-green-500"
          >
            <FaSearch
              size={15}
              className="ml-4 text-gray-400"
              aria-hidden="true"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search models..."
              aria-label="Search models"
              tabIndex={menuOpen ? 0 : -1}
              className="w-full bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
            />

            <button
              type="submit"
              disabled={!search.trim()}
              tabIndex={menuOpen ? 0 : -1}
              className="mr-2 rounded px-3 py-2 text-xs font-semibold text-green-500 transition-colors hover:bg-green-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-40"
            >
              SEARCH
            </button>
          </form>

          {/* MOBILE LINKS */}
          <div className="flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={mobileLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* MOBILE BOOKING BUTTON */}
          <button
            type="button"
            onClick={handleBooking}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-4 w-full rounded-md border border-gray-700 px-4 py-3 text-sm font-medium tracking-wide text-gray-200 transition-all duration-300 hover:border-green-500 hover:bg-green-500 hover:text-black"
          >
            BOOK CONSULTATION
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
