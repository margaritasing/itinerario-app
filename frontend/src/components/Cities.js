import React from "react";


import CardCities from "./CardCities";

import FormCity from "./FormCity";

const Cities = () => {
  
  
  return (
    <div className="cities" id="cities" >
     <FormCity/>
     <CardCities />     
    </div>
  );
};

export default Cities;
