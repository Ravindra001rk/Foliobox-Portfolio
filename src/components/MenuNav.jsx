import { FaLongArrowAltRight } from "react-icons/fa";
import React, { useRef, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Button from "./Button";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

const MenuNav = ({ menuOpen, setMenuOpen }) => {
  const navRef = useRef();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (menuOpen) {
      gsap.to(navRef.current, {
        top: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(navRef.current, {
        top: "-45%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <div
      ref={navRef}
      className="fixed z-[200] backdrop-blur-[22px] w-full pt-4 -top-[55%]"
    >
      <div className="flex items-center justify-between px-4">
        <NavLink
          to="/"
          onClick={() => {
            setMenuOpen(false);
            scrollToTop();
          }}
        >
          <h1 className="text-2xl font-bold">
            Folioblox
            <span className="text-red-700 text-[15px] align-top">®</span>
          </h1>
        </NavLink>
        <IoCloseSharp
          className="text-3xl cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            scrollToTop();
          }}
        />
      </div>

      <div className="mt-10 text-2xl flex flex-col border-t p-4">
        <ul className="flex flex-col gap-3">
          <NavLink
            to="/"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="about"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white"
            }
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="projects"
            onClick={() => {
              setMenuOpen(false);
              scrollToTop();
            }}
            className={({ isActive }) =>
              isActive ? "text-red-500 " : "text-white"
            }
          >
            <li>Projects</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MenuNav;
