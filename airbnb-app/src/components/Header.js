import Image from "next/image";
import { 
  MagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  Bars3Icon,
  UserCircleIcon,
 } from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
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
          type="text"
          placeholder="start your search..."
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="icon hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right section */}
      <div className="flex items-center justify-end text-gray-500 space-x-4">
        <p className="hidden md:inline">Become a host</p>
        <GlobeEuropeAfricaIcon
          className="h-6 cursor-pointer"
        />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon
            className="h-6 cursor-pointer"
          />
          <UserCircleIcon 
            className="h-6 cursor-pointer"
          />
        </div>
        
      </div>
    </header>
  );
}

export default Header;
