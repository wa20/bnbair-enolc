import React, { Suspense } from "react";
import Search from "./Search";

async function getData() {
  try {
    const searchRes = await fetch("https://www.jsonkeeper.com/b/5NPS", {
      cache: "force-cache",
    });
    const searchResults = await searchRes.json();

    return { searchResults };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { searchResults: [] }; // Return empty arrays or appropriate default data
  }
}

const Page = async () => {
  const { searchResults } = await getData();

  return (
    <div>
      <Suspense>
        <Search search={searchResults} />
      </Suspense>
    </div>
  );
};

export default Page;
