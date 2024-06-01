import { FaDiscord } from "react-icons/fa6";
import { motion } from "framer-motion";

const Marquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="my-36 mx-0 py-10 bg-gradient-to-b from-blue-700 to-blue-300 lg:py-16">
      <motion.div
        className="flex gap-40 items-center text-center whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        <h1 className="marquee-text">PLAY</h1>
        <h1 className="marquee-text">TALK</h1>
        <h1 className="marquee-text">CHAT</h1>
        <h1 className="marquee-text">HANG OUT</h1>
        <h1 className="marquee-text">PLAY</h1>
        <h1 className="marquee-text">TALK</h1>
        <h1 className="marquee-text">CHAT</h1>
        <h1 className="marquee-text">HANG OUT</h1>
        <h1 className="marquee-text">PLAY</h1>
        <h1 className="marquee-text">TALK</h1>
      </motion.div>
    </div>
  );
};

export default Marquee;
