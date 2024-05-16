import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="hero background image"
        fill
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>

        <button className="text-purple-500 bg-white rounded-full px-10 py-4 shadow-md  my-3 hover:shadow-xl active:scale-90 duration-150">
           {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm flexable
        </button>
      </div>
    </div>
  );
}

export default Hero;
