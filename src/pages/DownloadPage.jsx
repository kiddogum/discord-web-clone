import React from "react";
import { GoDownload } from "react-icons/go";
import svgHero from "../assets/laptop.svg";
import iphoneSVG from "../assets/iphone.svg";
import androidSVG from "../assets/android.svg";
import macSVG from "../assets/mac.svg";
import pcSVG from "../assets/pc.svg";
import DownloadType from "../components/DownloadType";

const DownloadPage = () => {
  return (
    <div className="relative bg-white overflow-x-hidden overflow-y-hidden">
      <section className="w-full m-0 px-2 py-16 bg-neutral-800 sm:py-36">
        <div className="mx-2 sm:mx-8 lg:mx-16 xl:flex item-center xl:my-16">
          <div className="my-8 flex flex-col gap-4 lg:my-12 xl:my-20 xl:gap-8">
            <h1 className="title text-left">GET DISCORD FOR ANY DEVICE</h1>
            <p className="desc text-left">
              An adventure awaits. Hang out with your friends on our desktop app
              and keep the conversation going on mobile.
            </p>

            <div className="w-full mx-auto flex flex-col items-start gap-6 sm:mx-12 lg:flex-row">
              <button className=" button-md bg-light-blue flex gap-2 self-start justify-center text-white hover:shadow-xl">
                <GoDownload className="text-2xl" />
                <p>Download for Windows</p>
              </button>
              <p className="desc px-12 text-center">Windows 10 or higher</p>
            </div>
          </div>
          <img
            src={svgHero}
            className=" mx-auto aspect-video object-cover md:w-3/4 lg:w-2/3"
          />
        </div>
      </section>

      <section className="w-full m-0 px-2 py-16 sm:py-36">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <DownloadType title={`iOS`} svg={iphoneSVG} phone={true} />
          <DownloadType title={`Android`} svg={androidSVG} phone={true} />
          <DownloadType title={`Linux`} svg={pcSVG} phone={false} />
          <DownloadType title={`Mac`} svg={macSVG} phone={false} />

          <div className=" w-full bg-grey px-2 py-6 flex flex-col gap-4 items-center rounded-xl">
            <h1 className="title text-black">Feeling experimental?</h1>
            <p className="desc text-black">
              Try our Public Test Build and test new features before they
              launch.
            </p>
            <button className="button-md py-4 px-8 bg-light-black text-white">
              Download Public Test Build
            </button>
          </div>

          <div className=" w-full bg-grey px-2 py-6 flex flex-col gap-4 items-center rounded-xl">
            <h1 className="title text-black">From the archives:</h1>
            <p className="desc text-black">
              Windows 7/8/8.1 and Windows 32-bit users can download official,
              but unsupported clients here.
            </p>
            <button className="button-md py-4 px-8 bg-light-black text-white">
              Download
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
