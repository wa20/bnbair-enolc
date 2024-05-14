import React from "react";
import Image from "next/image";

const LiveAnywhereCards = ({ img, title }) => {
  return (
    <div>
      <div className="relative h-18 w-18">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-gray-500">{title}</h3>
      </div>
    </div>
  );
};

export default LiveAnywhereCards;
