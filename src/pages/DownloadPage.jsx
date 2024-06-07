import { useState } from "react";
import { GoDownload } from "react-icons/go";
import svgHero from "../assets/laptop.svg";
import iphoneSVG from "../assets/iphone.svg";
import androidSVG from "../assets/android.svg";
import macSVG from "../assets/mac.svg";
import pcSVG from "../assets/pc.svg";
import DownloadType from "../components/DownloadType";
import SelectDropDown from "../components/SelectDropDown";
import { IoIosArrowDown } from "react-icons/io";

const DownloadPage = () => {
  const [linuxExpand, setLinuxExpand] = useState(false);
  const [experimentExpand, setExperimentExpand] = useState(false);
  const [archiveExpand, setArchiveExpand] = useState(false);

  const handleLinuxExpand = () => {
    setExperimentExpand(false);
    setArchiveExpand(false);
    setLinuxExpand((prev) => !prev);
  };
  const handleExperimentxExpand = () => {
    setExperimentExpand((prev) => !prev);
    setArchiveExpand(false);
    setLinuxExpand(false);
  };
  const handleArchiveExpand = () => {
    setExperimentExpand(false);
    setArchiveExpand((prev) => !prev);
    setLinuxExpand(false);
  };

  return (
    <div className="relative bg-white overflow-x-hidden overflow-y-hidden">
      <section className="w-full m-0 px-2 py-16 bg-neutral-800 sm:py-24 lg:h-dvh">
        <div className="mx-2 sm:mx-8 lg:mx-12 sm:flex items-center lg:my-20 lg:gap-8">
          <div className="my-8 flex flex-col gap-4 lg:gap-6 xl:gap-8">
            <h1 className="title text-left sm:text-6xl">
              GET DISCORD FOR ANY DEVICE
            </h1>
            <p className="desc text-left">
              An adventure awaits. Hang out with your friends on our desktop app
              and keep the conversation going on mobile.
            </p>

            <div className="w-full mx-auto flex flex-col items-start gap-6 lg:flex-row">
              <button className=" button-md bg-light-blue flex gap-2 self-start justify-center text-white hover:shadow-xl lg:py-3">
                <GoDownload className="text-2xl" />
                <p>Download for Windows</p>
              </button>
              <p className="desc px-12 my-auto text-center lg:px-0 lg:font-light">
                Windows 10 or higher
              </p>
            </div>
          </div>
          <img
            src={svgHero}
            className="mx-auto aspect-video object-cover sm:object-left lg:w-[50%]"
          />
        </div>
      </section>

      <section className="w-full m-0 px-6 py-16 sm:py-36 sm:px-12 lg:py-0 lg:pt-24 xl:px-32">
        <div className="custom-grid grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4 lg:gap-6">
          <DownloadType
            title={`iOS`}
            svg={iphoneSVG}
            phone={true}
            multiple={false}
          />
          <DownloadType
            title={`Android`}
            svg={androidSVG}
            phone={true}
            multiple={false}
          />
          <DownloadType
            title={`Linux`}
            svg={pcSVG}
            phone={false}
            multiple={true}
            isExpanded={linuxExpand}
            onclick={handleLinuxExpand}
          />
          <DownloadType
            title={`Mac`}
            svg={macSVG}
            phone={false}
            multiple={false}
          />

          <div className=" w-full bg-grey p-6 grid custom-grid-children gap-4 items-center rounded-xl sm:gap-0 lg:p-8">
            <h1 className="title text-black text-left lg:text-4xl lg:font-semibold">
              Feeling experimental?
            </h1>
            <p className="desc text-black text-left">
              Try our Public Test Build and test new features before they
              launch.
            </p>
            <div className="button-md w-fit bg-light-black relative mx-auto p-0 flex items-center text-white">
              <button
                className="flex whitespace-normal items-center gap-4 py-4 px-8 sm:py-2 sm:px-4 md:py-4 md:px-8 "
                onClick={handleExperimentxExpand}
              >
                Download Public Test Build
                <IoIosArrowDown className="text-lg" />
              </button>
              {experimentExpand && (
                <SelectDropDown
                  options={[
                    `Mac`,
                    `Linux dev`,
                    `Linux tar.gz`,
                    `Windows 64-bit`,
                  ]}
                />
              )}
            </div>
          </div>

          <div className=" bg-grey p6 grid custom-grid-children gap-4 items-center rounded-xl sm:gap-0 lg:p-8">
            <h1 className="title text-black text-left lg:text-4xl lg:font-semibold">
              From the archives:
            </h1>
            <p className="desc text-black text-left">
              Windows 7/8/8.1 and Windows 32-bit users can download official,
              but unsupported clients here.
            </p>
            <div className="button-md relative w-fit bg-light-black mx-auto p-0 flex items-center text-white">
              <button
                className="flex gap-4 items-center py-4 px-8 "
                onClick={handleArchiveExpand}
              >
                Download
                <IoIosArrowDown className="text-lg mt-1" />
              </button>
              {archiveExpand && (
                <SelectDropDown
                  options={[`Windows 7/8/8.1`, `Windows 32-bit`]}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadPage;
