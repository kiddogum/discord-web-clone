import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuDownload } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [background, setBackground] = useState("");

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const NavbarAnimation = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      x: 200,
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 0.2,
      },
    },
  };

  const NavLinkAnimation = {
    visible: {
      y: 0,
      opacity: 1,
    },
    hidden: {
      y: 50,
      opacity: 0,
    },
  };

  const ButtonAnimation = {
    visible: {
      x: -100,
      opacity: 1,
    },
    hidden: {
      x: 100,
      opacity: 0,
    },
  };

  const LogoAnimation = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setBackground("bg-dark-blue");
    } else {
      setBackground("");
    }
  });

  return (
    <nav className={`fixed top-0 w-full p-6 z-50  ${background}`}>
      <div className="flex justify-between">
        <div>
          {!isExpanded && (
            <motion.div
              className="flex gap-2 items-center"
              initial="visible"
              animate={isExpanded ? "hidden" : "visible"}
              exit="visible"
              variants={LogoAnimation}
            >
              <FaDiscord className="text-white text-2xl mt-1 sm:text-4xl" />
              <h2 className="text-white font-black sm:text-2xl">Discord</h2>
            </motion.div>
          )}
        </div>

        <div className="hidden gap-6 place-items-center lg:flex xl:gap-12">
          <a className="text-lg font-semibold text-white" href="#">
            Download
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Nitro
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Discover
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Safety
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Support
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Blog
          </a>
          <a className="text-lg font-semibold text-white" href="#">
            Careers
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <button className="button-sm hover:text-light-blue hover:shadow-xl">
            Open Discord
          </button>
          <GiHamburgerMenu
            className=" cursor-pointer text-white text-2xl  hover:text-light-blue sm:text-4xl lg:hidden"
            onClick={handleExpand}
          />
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed right-0 top-0 w-2/3 h-screen z-50 p-6 bg-white rounded-lg"
            initial="hidden"
            animate={isExpanded ? "visible" : "hidden"}
            exit="hidden"
            variants={NavbarAnimation}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center text-black font-bold text-center">
                <FaDiscord className=" mr-2 text-4xl" />
                <h4 className="text-xl">Discord</h4>
              </div>
              <FaX
                className="size-8 p-1 text-xl text-black rounded-full cursor-pointer hover:text-white hover:bg-light-blue"
                onClick={handleExpand}
              />
            </div>

            <hr className=" border-x-neutral-700" />

            <div className="p-6 flex flex-col gap-6">
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Download
              </motion.a>
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Nitro
              </motion.a>
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Safety
              </motion.a>
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Support
              </motion.a>
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Blog
              </motion.a>
              <motion.a
                href="#"
                className="text-lg font-semibold text-black"
                variants={NavLinkAnimation}
              >
                Careers
              </motion.a>
            </div>

            <motion.button
              className="button-md absolute bottom-[5%] left-1/2 whitespace-nowrap bg-light-blue text-white"
              variants={ButtonAnimation}
              whileHover={{ y: -5, type: "tween" }}
            >
              <LuDownload className=" text-2xl inline mb-1 mr-2" /> Download
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
