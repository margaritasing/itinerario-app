import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";

import { actionType } from "./reducer/reducer";
import { useStateValue } from "./reducer/StateProvider";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Cities from "./components/Cities";
import Navbar from "./components/NavBar";
 import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"; 
import CardCities from "./components/CardCities";
import City from "./components/City";
import Top from "./components/Top";
import SingUpYSingIn from "./components/SingUpYSingIn/SingUpYSingIn";

function App() {
  const [{cities, itineraries}, dispatch]=useStateValue()

  useEffect(() => {
    axios.get("http://localhost:4000/api/datos")
  .then(response =>{
    dispatch({
      type:actionType.CITIESDB,
      cities:response.data.response.cities
    })
    axios.get("http://localhost:4000/api/itinerary")
    .then(response => {
      dispatch({
         type:actionType.ITINERARIESDB,
         itineraries: response.data.response.itinerary
       })
      
     });
  })
  },[])

  /* const data = []; 
  axios.get("http://localhost:4000/api/datos").then((response) => {
    data.push(...response.data.response.cities);
  });
  const itinerary = [];
  axios.get("http://localhost:4000/api/itinerary").then((response) => {
    itinerary.push(...response.data.response.itinerary);
  }); */


  return (
    <BrowserRouter>
      <div className="">
        <Navbar /> {/* Esto es para que quede fijo en todas las rutas */}
        <Top />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />          
          <Route path="/city/:id" element={<City/>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
