import React from "react";

import Hero from "./Hero";
import Service from "./Service";

import Slider from "./Slider/Slider";
import Heroes from "./Heroes/Heroes";
import Galeria from "./Galeria/Galeria";
import Opinion from "./Opinion/Opinion";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Service />
      <Heroes />
      <Galeria />
      <Opinion />
      <Slider />
    </div>
  );
};

export default Home;
