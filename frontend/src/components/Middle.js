import React from 'react'
import { Link as LinkRouter } from "react-router-dom";
import styled from "styled-components";
import Imagen from "../img/middle.png"

const Middle = () => {
  return (
    
        <Section>
        <div className='middle'>
           
              <div className='image-middle'>
                <img src={Imagen} alt=".." />                
              </div>
              <div className='text-middle'>
                <h2>Why travel with our Detailed Routes?</h2>
                <ul>
                    <li>You will save time when setting up your trip</li>
                    <li>You will make the most of your days</li>
                    <li>It will cost you much less money</li>
                    <li>You won't miss anything interesting</li>  
                    <li>You won't go wrong with any tour, hotel or restaurant</li>              
                </ul>
                <LinkRouter to="/cities">
                  <button className="custom-btn btn-3"><span>Read More</span></button>              
                </LinkRouter> 
              </div>              
             
        </div>  
        <h2 style={{textAlign:"center"}}>Itinerary Favorite</h2>            
        </Section>
    
    
  )
}


const Section = styled.section`
.middle{
  display:flex;
  justify-content:space-around; 
  background-color:#fff; 
  height:400px;
}

img{
  width:400px;
  height:400px;
  margin-left:10px;
}

.text-middle{
  margin-top:20px;
}

h2{
  margin-bottom:5px;
}



li::marker {
  color: green;
  font-size: 15px;

}

li{
  margin-top:20px;
 
}

button{
  margin-top:20px;
  margin-left:160px;
  background-color:#0d6efd;
  color:#fff;
}

/* 3 */
.btn-3 {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    width: 130px;
    height: 40px;
    line-height: 42px;
    padding: 0;
    border: none;

}

.btn-3 span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
}

.btn-3:before,
.btn-3:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3:before {
    height: 0%;
    width: 2px;
}

.btn-3:after {
    width: 0%;
    height: 2px;
}

.btn-3:hover {
    background: transparent;
    box-shadow: none;
}

.btn-3:hover:before {
    height: 100%;
}

.btn-3:hover:after {
    width: 100%;
}

.btn-3 span:hover {
    color: rgba(2, 126, 251, 1);
}

.btn-3 span:before,
.btn-3 span:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
}

.btn-3 span:before {
    width: 2px;
    height: 0%;
}

.btn-3 span:after {
    width: 0%;
    height: 2px;
}

.btn-3 span:hover:before {
    height: 100%;
}

.btn-3 span:hover:after {
    width: 100%;
}



  
  @media screen and (min-width: 280px) and (max-width: 720px) {

    .middle{
       flex-direction: column;
       margin-top:100px;
       height:600px;
     
    }
    img{
      width:100%;
      height:300px;
      margin: 20px 0 0 0;
      
    }

    h2{     
      margin: 0 0 0 10px;
      font-size:20px;
    }

    .text-middle{
      margin-top:0;
    }

    ul{
      font-size:15px;
    }

    li{
      margin-top:10px;
     
    }

    
    
    ul{  
      margin-left:5px;   
    
     }

     button {
      margin: 15px 0 25px 130px;
      background-color:#0d6efd;
      color:white;
      
  }
  
    
  
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;


export default Middle