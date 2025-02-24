import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi"; // Mobile menu icon
import { IoClose } from "react-icons/io5"; // Close icon for mobile menu

const MenuLinks = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Shop", link: "/Shop" },
  { id: 3, name: "About", link: "/About" },
  { id: 4, name: "Blogs", link: "/Blog" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ handleOrderPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center mx-auto px-4">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-red-500 font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
              Eshop
            </a>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-4">
              {MenuLinks.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}

              {/* Dropdown */}
              <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                >
                  Quick Links
                  <span>
                    <FaCaretDown className="group-hover:rotate-180 duration-300" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          className="text-gray-500 hover:text-black dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-red-100 rounded-md font-semibold"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Navbar Right Section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:flex items-center h-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-gray-700 dark:text-white w-0 group-hover:w-[200px] transition-all duration-300 rounded-full group-hover:border group-hover:border-gray-500 px-3 py-1 focus:outline-none dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-red-500 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Cart */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs font-bold">
                5
              </div>
            </button>

            {/* Dark Mode */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by Default, Shows when Open) */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 w-full bg-white dark:bg-gray-900 shadow-md p-4">
          <ul className="flex flex-col space-y-4">
            {MenuLinks.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {data.name}
                </Link>
              </li>
            ))}

            {/* Mobile Dropdown */}
            <li className="relative cursor-pointer">
              <details className="group">
                <summary className="flex justify-between items-center font-semibold text-gray-500 hover:text-black dark:hover:text-white cursor-pointer">
                  Quick Links
                  <FaCaretDown className="group-open:rotate-180 duration-300" />
                </summary>
                <ul className="mt-2 space-y-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-md">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        className="block p-2 text-gray-500 hover:text-black dark:hover:text-white duration-200 hover:bg-red-100 rounded-md font-semibold"
                        href={data.link}
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
