import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";
import MenuNav from "./MenuNav";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0); // useRef to avoid re-registering listener
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) setShow(false);
      else setShow(true);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleBtn = () => {
    setMenuOpen((v) => !v); // toggle instead of always setting true
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div>
      <MenuNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        className={`fixed left-0 backdrop-blur-[2px] w-full z-50 transition-transform duration-300 text-white font-medium shadow-md px-8 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center p-4">
          <NavLink to="/" onClick={scrollToTop}>
            <h1 className="text-3xl font-bold">
              Folioblox<span className="text-black text-xl align-top">®</span>
            </h1>
          </NavLink>
          <div>
            <ul className="hidden md:flex space-x-6 items-center">
              <NavLink to="/" onClick={scrollToTop}>
                <li className="hover:text-orange-500">Home</li>
              </NavLink>

              <NavLink
              onClick={scrollToTop}
                to="about"
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white"
                }
              >
                <li className="hover:text-orange-500">About</li>
              </NavLink>

              <NavLink
              onClick={scrollToTop}
                to="projects"
                className={({ isActive }) =>
                  isActive ? "text-red-500 " : "text-white"
                }
              >
                <li className="hover:text-orange-500"> Projects</li>
              </NavLink>

              <Button text="Get in Touch" />
            </ul>
            <IoMdMenu
              className="text-3xl block md:hidden"
              onClick={toggleBtn}
            />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
