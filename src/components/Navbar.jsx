import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuDownload } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

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
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setBackground("bg-dark-blue");
    } else {
      setBackground("");
    }
  });

  const handleAlertDownload = () => {
    alert("downloading discord");
  };

  return (
    <nav className={`fixed top-0 z-50 w-full p-6  ${background}`}>
      <div className="flex justify-between">
        <div>
          {!isExpanded && (
            <motion.div
              initial="visible"
              animate={isExpanded ? "hidden" : "visible"}
              exit="visible"
              variants={LogoAnimation}
            >
              <Link to="/" className="flex gap-2 items-center">
                <FaDiscord className="text-white text-2xl mt-1 sm:text-4xl" />
                <h2 className="text-white font-black sm:text-2xl">Discord</h2>
              </Link>
            </motion.div>
          )}
        </div>

        <div className="hidden gap-6 place-items-center lg:flex xl:gap-12">
          <Link className="text-lg font-semibold text-white" to="/download">
            Download
          </Link>
          <Link className="text-lg font-semibold text-white" to="/nitro">
            Nitro
          </Link>
          <Link className="text-lg font-semibold text-white" to="/discover">
            Discover
          </Link>
          <Link className="text-lg font-semibold text-white" to="/safety">
            Safety
          </Link>
          <Link className="text-lg font-semibold text-white" to="/support">
            Support
          </Link>
          <Link className="text-lg font-semibold text-white" to="/blog">
            Blog
          </Link>
          <Link className="text-lg font-semibold text-white" to="/careers">
            Careers
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-6">
          <button className="button-sm hover:text-light-blue hover:shadow-xl">
            <Link
              to="https://discord.com/channels/@me"
              className=" hover:no-underline"
            >
              Open Discord
            </Link>
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
              <div className=" text-black font-bold text-center">
                <Link to="/" className="flex items-center hover:no-underline">
                  <FaDiscord className=" mr-2 text-4xl" />
                  <h4 className="text-xl">Discord</h4>
                </Link>
              </div>
              <FaX
                className="size-8 p-1 text-xl text-black rounded-full cursor-pointer hover:text-white hover:bg-light-blue"
                onClick={handleExpand}
              />
            </div>

            <hr className=" border-x-neutral-700" />

            <div className="p-6 flex flex-col gap-6">
              <motion.div variants={NavLinkAnimation}>
                <Link
                  to="/download"
                  className="text-lg font-semibold text-black"
                >
                  Download
                </Link>
              </motion.div>
              <motion.div variants={NavLinkAnimation}>
                <Link to="/nitro" className="text-lg font-semibold text-black">
                  Nitro
                </Link>
              </motion.div>
              <motion.div variants={NavLinkAnimation}>
                <Link to="/safety" className="text-lg font-semibold text-black">
                  Safety
                </Link>
              </motion.div>
              <motion.div variants={NavLinkAnimation}>
                <Link
                  to="/support"
                  className="text-lg font-semibold text-black"
                >
                  Support
                </Link>
              </motion.div>
              <motion.div variants={NavLinkAnimation}>
                <Link to="/blog" className="text-lg font-semibold text-black">
                  Blog
                </Link>
              </motion.div>
              <motion.div variants={NavLinkAnimation}>
                <Link
                  to="/carrers"
                  className="text-lg font-semibold text-black"
                >
                  Carrers
                </Link>
              </motion.div>
            </div>

            <motion.button
              className="button-md absolute bottom-[5%] left-1/2 whitespace-nowrap bg-light-blue text-white"
              variants={ButtonAnimation}
              whileHover={{ y: -5, type: "tween" }}
              onClick={handleAlertDownload}
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
