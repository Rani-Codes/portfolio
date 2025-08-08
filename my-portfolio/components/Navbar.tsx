"use client";
import { motion } from "framer-motion";

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center mt-2 sm:mt-4 fixed z-20">
      <ul className="flex justify-evenly p-2 w-11/12 border border-secondary text-xs sm:text-sm sm:w-4/5 lg:text-base lg:w-3/5 xl:text-lg text-primary backdrop-blur bg-opacity-70 bg-white rounded sm:rounded-xl">
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("#home")}
          >
            Home
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("#experience")}
          >
            Experience
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("#projects")}
          >
            Projects
          </motion.button>
        </li>
        <li>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("#about")}
          >
            About Me
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
