import React from "react";
import Image from "next/image";

const LiveAnywhereCards = ({ img, title}) => {
  return (
    <div className="m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          src={img}
          alt={title}
          fill
          objectFit="contain"
          className="rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-2xl mt-3 text-gray-500">{title}</h3>
      </div>
    </div>
  );
};

export default LiveAnywhereCards;
