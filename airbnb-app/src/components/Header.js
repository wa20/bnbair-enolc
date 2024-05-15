"use client";

import Image from "next/image";
import {
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/navigation";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const cancelInput = () => {
    setSearchInput("");
  };

  const handleSearch = () => {
    // NextJS 14 - next/navigation cannot pass query params and requeirs a string
    router.push(
      `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${numberOfGuests}`
    );
  };

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle section */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || 'Start your search'}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="icon hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right section */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline">Become a host</p>
        <GlobeEuropeAfricaIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-5">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              max={20}
              className="w-12 pl-3 test-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={cancelInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button onClick={handleSearch} className="flex-grow text-red-500">
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
