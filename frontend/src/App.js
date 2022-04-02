import { BrowserRouter, Routes, Route } from "react-router-dom";

import React, { useEffect } from "react";

import { actionType } from "./reducer/reducer";
import { useStateValue } from "./reducer/StateProvider";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css"

import axios from "axios";



import Footer from "./components/Footer";
import Home from "./components/Home"; 
import Cities from "./components/Cities";
import Navbar from "./components/NavBar";
 import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp"; 

import City from "./components/City";
import Top from "./components/Top";

import SignOut from "./components/SignOut";


function App() {
  const [{cities, itinerarie}, dispatch]=useStateValue()

  useEffect(() => {
    axios.get("https://itinerarioapp.herokuapp.com/api/datos")
  .then(response =>{
    dispatch({
      type:actionType.CITIESDB,
      cities:response.data.response.cities
    })
    axios.get("https://itinerarioapp.herokuapp.com/api/itinerary")
    .then(response => {
      dispatch({
         type:actionType.ITINERARIESDB,
         itineraries: response.data.response.itinerary
       })
      
     });
  })

      if(localStorage.getItem("token") !== null){
        const token=localStorage.getItem("token")
        axios.get("https://itinerarioapp.herokuapp.com/api/signInToken", {
          headers:{
            'Authorization':'Bearer '+ token //espacio ya aplicado
          }
        })
        .then(user=>{
        if(user.data.success){
          dispatch({
            type:actionType.USER,
            user:user.data
          })
        }else{
          localStorage.removeItem("token")
        }
      })
      }
  },[])


  
 


  return (
    <BrowserRouter>
      <div className="">      
        <Navbar /> {/* Esto es para que quede fijo en todas las rutas */}
        <Top />
        <Routes>
          <Route index element={<Home />} /> {/* lo cambio para verificar las rutas */}
          <Route path="/cities" element={<Cities />} />          
          <Route path="/signin" element={<SignIn />} />          
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/signout" element={<SignOut />} />          
          <Route path="/city/:id" element={<City/>}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
