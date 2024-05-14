import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import ExploreCards from "@/components/ExploreCards";
import LiveAnywhereCards from "../components/LiveAnywhereCards";
import FooterHero from "@/components/FooterHero";
import Footer from "@/components/Footer";

async function getData() {
  try {
    const exploreRes = await fetch("https://www.jsonkeeper.com/b/4G1G", {
      cache: "force-cache",
    });
    const exploreData = await exploreRes.json();

    const cardsRes = await fetch("https://www.jsonkeeper.com/b/VHHT", {
      cache: "force-cache",
    });
    const cardsData = await cardsRes.json();

    return { exploreData, cardsData };
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return { exploreData: [], cardsData: [] }; // Return empty arrays or appropriate default data
  }
}


const Page = async () => {
  const {exploreData, cardsData} = await getData();

  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Section*/}
      <Header />

      {/* Banner Section*/}
      <Hero />

      {/* Main /section */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5"> Explore Nearby </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {exploreData?.map(({ img, distance, location }) => (
              <ExploreCards
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
        <h2 className="text-4xl font-semibold py-8"> Live Anywhere </h2>
        <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map(({ img, title }) => (
              <LiveAnywhereCards
              key={img}
              img={img}
              title={title}
              />
            ))}
        </div>
        </section>

        <FooterHero
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
        
      </main>

      <Footer/>
    </div>
  );
};

export default Page;
