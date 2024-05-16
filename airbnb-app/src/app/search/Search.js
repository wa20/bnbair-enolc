"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import Map from "@/components/Map";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";

const Search = ({ search }) => {
  const searchParams = useSearchParams();
  // const { searchResults } = await getData();

  // Extracting query parameters
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const guests = searchParams.get("guests"); // 'Guests' is case-sensitive

  // Returning an object with the extracted parameters

  // const searchData = {
  //   location,
  //   startDate,
  //   endDate,
  //   guests,
  // };

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndtDate = format(new Date(endDate), "dd MMMM yy");
  const dateRange = `${formattedStartDate} - ${formattedEndtDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${dateRange} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays | {dateRange} | for {guests} guests{" "}
          </p>
          <h1 className="text-3xl font-semibold mb-6"> Stays in: {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-4">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>

          <div className="flex flex-col">
            {search?.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map search={search} />
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Search;
