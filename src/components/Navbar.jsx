import profile from "/img/profile.jpg";
import { GoHomeFill } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../util/useMediaQuery";

export default function Navbar() {
  const [toggled, setToggled] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <nav
      id="navbar"
      className="bg-dark text-light relative px-8 py-8 flex justify-between items-center"
    >
      <a href="/">
        <img src="/favicon.ico" alt="Logo" className="w-7 h-7" />
      </a>

      {matches && (
        <div className="flex gap-12 items-center text-light">
          <a href="#about">About</a>
          {/* <a href="#experience">Experience</a> */}
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/Tejasmore-resume.pdf" download="Tejasmore-resume">
            <button className="px-5 py-1.5 border-2 border-light border-dashed bg-dark  text-light  hover:bg-light hover:text-dark">
              Resume
            </button>
          </a>
        </div>
      )}

      {!matches && (
        <div
          onClick={() => setToggled((prevToggle) => !prevToggle)}
          className="space-y-1.5 cursor-pointer z-50"
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-light"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-light"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-light"
          ></motion.span>
        </div>
      )}

      {toggled && !matches && (
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 25 }}
          className="fixed bg-dark text-light bottom-0 left-0 w-full h-screen flex items-center justify-center"
        >
          <div className="flex flex-col gap-24 text-lg text-center">
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="#about"
            >
              About
            </a>
            {/* <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="#experience"
            >
              Experience
            </a> */}
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="#projects"
            >
              Projects
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="#contact"
            >
              Contact
            </a>
            <a
              onClick={() => setToggled((prevToggle) => !prevToggle)}
              href="/tejasmoreResume.pdf"
              download="tejasmoreResume"
            >
              <button className="px-5 py-1.5 border-2 border-light border-dashed bg-dark text-light font-semibold hover:bg-light hover:text-dark">
                Resume
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
