import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";


import Destination1 from "../img/Destination1.png";
import Destination2 from "../img/Destination2.png";
import Destination3 from "../img/Destination3.png";
import Destination4 from "../img/Destination4.png";
import Destination5 from "../img/Destination5.png";
import Destination6 from "../img/Destination6.png";


export default class Responsive extends Component {
  render() {
    const mystyle = {
      width: "300px",
      height:"400px",
      marginLeft:"20px",
    };
    

  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

      <div>
        <Link className="nav-link" aria-current="page" to="/cities" >
        <h2 style={{textAlign:"center", color:"#000"}}> Popular MyTineraries </h2>
         </Link>
        
        <Slider {...settings}>
          <div>
            <img src={Destination1} style={mystyle} alt=""></img>
            
          </div>
          <div>
          <img src={Destination2} style={mystyle} alt=""></img>
          </div>
          <div>
          <img src={Destination3} style={mystyle} alt=""></img>
          </div>
          <div>
          <img src={Destination4} style={mystyle} alt=""></img>
          </div>
          <div>
          <img src={Destination5} style={mystyle} alt=""></img>
          </div>
          <div>
          <img src={Destination6} style={mystyle} alt=""></img>
          </div>
         
        </Slider>
      </div>
    );
  }
}