"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation"
 
const Search = () => {
  const router = useRouter()

  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ stays | actual values input </p>
          <h1 className="text-3xl font-semibold mb-6"> Stays in: Location</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-4">
            <p className="btn">
              Cancellation Flexibility
            </p>
            <p className="btn">
              Type of place
            </p>
            <p className="btn">
              Price
            </p>
            <p className="btn">
              Rooms and Beds
            </p>
            <p className="btn">
              More Filters
            </p>
          </div>
        </section>

        <section></section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
