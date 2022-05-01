import React from "react";


import Service from "./Service";
import Heroes from "./Heroes/Heroes";
import Middle from "./Middle";
import ItinerarioContinen from "./ItinerarioContinen";
import SliderNext from "./SliderNext";
import Carrusel from "./Carrusel";








const Home = () => {

  

  return (
    <div className="home">       
      <Carrusel/>
      <Service />    
      <Heroes />
      <ItinerarioContinen/>      
      <Middle/>     
      <SliderNext/>   
    </div>
  );
};

export default Home;
