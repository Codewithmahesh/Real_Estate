// import SearchBar from "@/components/searchBar/SearchBar";
import Awards from "@/components/Awards";
import Featured from "@/components/HomeFeature";
import Hero from "@/components/HomeHero";
import Recent from "@/components/Recent";
import Location from "@/components/Location";
import React from "react";
import Team from "@/components/Team";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
    </>
  );
};

export default HomePage;
