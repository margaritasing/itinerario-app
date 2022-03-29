import React from "react";

import Hero from "./Hero";
import Service from "./Service";

import Slider from "./Slider/Slider";
import Heroes from "./Heroes/Heroes";
import Galeria from "./Galeria/Galeria";
import Middle from "./Middle";
import ItinerarioContinen from "./ItinerarioContinen";


const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Service />
      <Heroes />
      <ItinerarioContinen/>
      <Galeria />
      <Middle/>
      <Slider />
    </div>
  );
};

export default Home;
