import SelectDropDown from "./SelectDropDown";
import { IoIosArrowDown } from "react-icons/io";

const DownloadType = ({ title, svg, phone, multiple, isExpanded, onclick }) => {
  return (
    <div
      className={`custom-grid-children w-full overflow-hidden bg-grey px-2 py-12 flex flex-col gap-4 items-center rounded-xl sm:gap-12`}
    >
      <h1 className="title text-black lg:text-5xl lg:font-semibold">{title}</h1>
      {multiple ? (
        <div className="button-md  bg-light-black relative m-0 p-0 flex items-center text-white">
          <button className="flex gap-4 py-4 px-8 lg:py-3" onClick={onclick}>
            Download
            <IoIosArrowDown className="text-lg mt-1" />
          </button>
          {isExpanded && <SelectDropDown options={[`dev`, `tar.gz`]} />}
        </div>
      ) : (
        <button className="button-md py-4 px-8 bg-light-black text-white">
          Download
        </button>
      )}

      <img src={svg} className={phone ? `max-w-[200%]` : ``} />
    </div>
  );
};

export default DownloadType;
