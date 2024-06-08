import React from "react";

const NitroCards = ({ title, bg, perks }) => {
  return (
    <div className={` ${bg} nitro-card grid gap-6`}>
      <h2>{title}</h2>
      <div className="grid gap-2 mb-6 place-content-start">
        {perks.map((perk, i) => (
          <div className="flex gap-2 items-center" key={i}>
            {perk.icon}
            <p>{perk.text}</p>
          </div>
        ))}
      </div>
      <button className="nitro-card-button">Subscribe</button>
    </div>
  );
};

export default NitroCards;
