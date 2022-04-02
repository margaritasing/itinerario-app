import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import homeImage from "../img/singapur.jpg";


export default function HeroCard(props) {
  const city=props.itinerary

    

  return (
    <Section id="HeroCard"> 
    { city.map((data, index)=> 
      <div key={index}>
          <div className="background" >
              <img src={data.image} alt=""  />
          </div>
      <div className="content">        
          <div className="title">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
          </div>     
          <div className="search">
             <img className="bandera" src={data.flag} alt="..."/>          
          </div>
      </div>
         
      </div>
    
    )}   

    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-bottom:40px;
  width: 100%;
  height: 100%;
  .search img {
    border-radius:50%;
    width:200px;
    height:200px;
    position: relative;
    z-index: 1000;   
    margin-top:250px;
   }
  
  .background {
    height: 100%;
    img {
      width: 100%;
      height:600px;
      filter: brightness(80%);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      margin-top:150px;
      h1 {
        font-size: 100px;
        letter-spacing: 0.2rem;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 2.5rem;
      }
    }
    .search {
     
      display: flex;     
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;        
      }
    
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    margin-bottom:150px;
   .background{ 
          
    img {
     
    }
   }
    
    .search img {         
      margin-top:0px; 
      width:100px;
      height:100px; 
           
     } 
    .content {
     
      .title {
        h1 {
          font-size: 3rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;