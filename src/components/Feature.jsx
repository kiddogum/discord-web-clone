import React from "react";

const Feature = ({ title, desc, svg, color }) => {
  return (
    <section className="my-24 mx-10 sm:my-36 lg:mx-16">
      <div className="feature-container md:grid md:grid-cols-2 place-items-center">
        <div className="p-4 flex flex-col gap-4 sm:p-12">
          <h1 className="title text-left">{title}</h1>
          <p className="desc text-left">{desc}</p>
        </div>

        <div className={`feature-image-container ${color}`}>
          <img src={svg} className="m-auto  w-4/5" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
