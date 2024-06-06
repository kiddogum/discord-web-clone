import React from "react";

const DownloadType = ({ title, svg, phone }) => {
  return (
    <div
      className={`grid-child aspect-[1/1.3] w-full overflow-hidden bg-grey px-2 py-6 flex flex-col gap-4 items-center rounded-xl`}
    >
      <h1 className="title text-black">{title}</h1>
      <button className="button-md py-4 px-8 bg-light-black text-white">
        Download
      </button>
      <img src={svg} className={phone ? `max-w-[200%]` : ``} />
    </div>
  );
};

export default DownloadType;
