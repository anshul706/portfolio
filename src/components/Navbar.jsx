import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#0b0721]" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className='w-9 h-9 flex items-center justify-center bg-[#915EFF] rounded-full text-white font-bold text-lg'>A</div>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Anshul &nbsp;
            <span className='sm:block hidden text-[#915EFF]'> | Full Stack Developer</span>
          </p>
        </a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-white" : "text-[#aaa6c3]"} hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            className='text-white text-2xl cursor-pointer'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "✕" : "☰"}
          </button>

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-[#1d1836] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-[#aaa6c3]"}`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
