import Image from 'next/image'
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "@/components/Hero";
import ExploreCards from '@/components/ExploreCards';


async function getData() {
  const res = await fetch('https://www.jsonkeeper.com/b/4G1G', { cache: 'force-cache' });
  const data = await res.json()
  return data
}

const Page = async () => {

  const exploreData = await getData()

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

            {exploreData?.map(({img, distance, location}) => (
              <ExploreCards
              key={img} 
              img={img} 
              distance={distance} 
              location={location} 
              />
            ))}

        </section>

          {/* pull data from server */}
      </main>




      
    </div>
  );
}

export default Page