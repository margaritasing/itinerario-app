import React from "react";

import Hero from "./Hero";
import Service from "./Service";

import Slider from "./Slider/Slider";
import Heroes from "./Heroes/Heroes";

import Middle from "./Middle";
import ItinerarioContinen from "./ItinerarioContinen";
import Carousel from "./Carrusel/Carousel";



const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Service />
      <Heroes />
      <ItinerarioContinen/>
      <Carousel/>   
      <Middle/>
      <Slider />      
    </div>
  );
};

export default Home;
