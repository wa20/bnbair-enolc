import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      <div className="relative h-24 w-40 md:h-52 md:w-80 my-2 mr-5 flex-shrink-0">
        <Image 
        src={img} 
        fill 
        objectFit="cover" 
        className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon 
          className="h-7 cursor-pointer" 
          />
        </div>
        <h4 className="text-xl text-gray-700">{title}</h4>

        <div className=" border-b w-10 pt-2" />

        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon 
            className="h-5 text-red-500 " 
            />
            {star}
          </p>
          <div className="flex flex-col">
            <p className="text-lg lg:text-2xl font-semibold pb-2 ">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
