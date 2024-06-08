import React from "react";
import "../css/nitro.css";
import NitroCards from "../components/NitroCards";
import personWallet from "../assets/person-wallet.svg";
import { ImArrowUp } from "react-icons/im";
import { IoIosHappy } from "react-icons/io";
import { MdAddReaction } from "react-icons/md";
import { SiBoosty } from "react-icons/si";
import { BsCameraVideoFill } from "react-icons/bs";
import { TbDiamondFilled } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

const NitroPage = () => {
  return (
    <div>
      <section className=" hero-bg">
        <div className="px-4 pt-40 md:px-16">
          <div className="grid grid-cols-1 gap-4 text-center text-white md:grid-cols-2 md:text-left md:mb-28 xl:px-16 ">
            <div className="grid gap-4 sm:px-28 md:px-0 md:flex md:flex-col md:justify-center">
              <h1>Unleash more fun with Nitro</h1>
              <p>
                Subscribe to Nitro to upgrade your emoji, personalize your
                profile, share bigger files, and so much more.
              </p>
            </div>

            <img
              src={personWallet}
              className="w-1/3 mx-auto sm:w-1/4 md:w-1/2 xl:w-1/3"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:px-24">
            <NitroCards
              title={`NITRO BASIC`}
              bg={`bg-blue-400`}
              perks={[
                { icon: <ImArrowUp />, text: "50MB uploads" },
                { icon: <IoIosHappy />, text: "Custom emoji anywhere" },
                { icon: <MdAddReaction />, text: "Unlimited Super Reactions" },
                {
                  icon: <SiBoosty />,
                  text: "Special Nitro badge on your profile",
                },
              ]}
            />

            <NitroCards
              title={`NITRO`}
              bg={`bg-pink-400`}
              perks={[
                { icon: <ImArrowUp />, text: "500MB uploads" },
                { icon: <IoIosHappy />, text: "Custom emoji anywhere" },
                { icon: <MdAddReaction />, text: "Unlimited Super Reactions" },
                {
                  icon: <BsCameraVideoFill />,
                  text: "HD video streaming",
                },
                {
                  icon: <TbDiamondFilled />,
                  text: "2 Server Boosts",
                },
                {
                  icon: <CgProfile />,
                  text: "Custom profiles and more!",
                },
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default NitroPage;
