import Image from "next/image";
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">

      <Head>
          <title>Airbnb</title>
          <link rel='icon' href="/favicon.ico" />
      </Head>

      {/* Header Section*/}
      <Header/>

      {/* Banner Section*/}
      <Hero/>

      {/* Main /section */}
      
      




      
    </div>
  );
}
