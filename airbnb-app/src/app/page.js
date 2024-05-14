import Image from "next/image";
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "@/components/Hero";
// import { InferGetStaticPropsType, GetStaticProps } from 'next'


const Home = async ({ exploreData }) => {

  // const staticData = await fetch(`https://...`, { cache: 'force-cache' })

  // const exploreData = await fetch('https://links.papareact.com/pyp' , { cache: 'force-cache' })

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
      
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
            <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>

            {exploreData?.map(item => (
              <h1 key={index}>{item.location}</h1>
            ))}

        </section>

          {/* pull data from server */}
      </main>




      
    </div>
  );
}

export default Home

export async function getStaticProps() {
  // Fetch data from an API
  const res = await fetch('https://links.papareact.com/pyp');
  const exploreData = await res.json();

  // Pass data to the page component as props
  return {
    props: { exploreData },
  };
}
