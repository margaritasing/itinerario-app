import React from "react";


import CardCities from "./CardCities";
import Testimonials from "./Testimonial";

import ServiceCities from "./ServiceCities";
import FormCity from "./FormCity";

const Cities = () => {
  
  
  return (
    <div className="cities" id="cities" >
     <FormCity/>
      <CardCities />
      <Testimonials />
      <ServiceCities />
    </div>
  );
};

export default Cities;
