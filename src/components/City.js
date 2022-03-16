import React from "react";

import { useStateValue } from "../reducer/StateProvider";

import HeroCard from "./HeroCard";
import CardInfo from "./CardInfo";
import CardExtenden from "./CardExtenden";
import Coment from "./Coment";
import { useParams } from "react-router-dom";



const City = () => {

  const [{cities,itineraries}, dispatch]=useStateValue()
  const {id}=useParams()
  const citySelecter = cities.filter(city=>city._id === id)
  const itinerarySelecter= itineraries.filter(itin =>itin.city=== citySelecter[0].name)
 


 /*  const { id } = useParams();
  const citySelected = props.data.filter(city => city._id == id); 
  const cityItinerary = 
    props.itinerary.filter(city => city.city == citySelected[0].name) */
  

 

  return (
    <div className="city">
      <HeroCard  itinerary={citySelecter}/>
      <CardExtenden itinerary={citySelecter} />
      <CardInfo itinerary={itinerarySelecter} />     
    </div>
  );
};

export default City;
