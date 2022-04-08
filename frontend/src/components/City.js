import React from "react";

import { useStateValue } from "../reducer/StateProvider";

import HeroCard from "./HeroCard";
import HeroCity from "./HeroCity";
import CardInfo from "./CardInfo";
import { useParams } from "react-router-dom";





const City = () => {

  const [{cities,itineraries}, dispatch]=useStateValue()
  
  
  const {id}=useParams()
  const citySelecter = cities.filter(city=>city._id === id)
  const itinerarySelecter= itineraries.filter(itin =>itin.city=== citySelecter[0].name)
 
 



  

  

  return (
    <div className="city">
      <HeroCard  itinerary={citySelecter}/>     
      <HeroCity itinerary={citySelecter}/> 
      <CardInfo itinerary={itinerarySelecter} />      
    </div>
  );
};

export default City;
