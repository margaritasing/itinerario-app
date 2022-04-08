import React from "react";

import Hero from "./Hero";
import Service from "./Service";


import Heroes from "./Heroes/Heroes";

import Middle from "./Middle";
import ItinerarioContinen from "./ItinerarioContinen";
import SliderNext from "./SliderNext";






const Home = () => {

  

  return (
    <div className="home">
      <Hero />
      <Service />
      <Heroes />
      <ItinerarioContinen/>      
      <Middle/>     
      <SliderNext/>   
    </div>
  );
};

export default Home;
