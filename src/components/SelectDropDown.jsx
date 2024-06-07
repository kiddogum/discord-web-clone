import { IoIosArrowDown } from "react-icons/io";

const SelectDropDown = ({ options }) => {
  return (
    <div
      className={`absolute top-[120%] z-40 w-full bg-white py-4 px-6 flex flex-col gap-4 font-light text-black rounded-lg shadow-lg`}
    >
      {options.map((option, i) => (
        <button key={i} className="w-full flex items-start ">
          {option}
        </button>
      ))}
    </div>
  );
};

export default SelectDropDown;
