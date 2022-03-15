import React, {useState} from "react";
import styled from "styled-components";
import Coment from "./Coment";

const CardInfo = (props) => {
  
 

  return (
       <Section>                                
           <div className="card-group cardinfo ">
           <div className="container">
           <div className="row">
           {props.itinerary.map( data=> 
              <div className="card col-lg-3  my-3" key={data._id}>                          
              <img src={data.image} className="card-img-top mt-2" alt="..."></img>         
              <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text"><small className="text-muted">{data.price}</small></p>
              </div>
              <div className="my-3">
               <Coment itinerary={data._id} />           
              </div>   
              </div>
              )}     
              
           
           </div>          
           </div>              
          </div>          
           
        
      </Section>
    )
}

const Section = styled.section`
  .cardinfo {
    margin: 0 0 20px 240px
       
  }  

  h5 {
    text-align: center;
    padding: 15px;
    border-radius: 15px;
    background-color: #9ad0ec;
  }
 
  img {
    width: 100%;
    height: 200px;
    
  }

  .card {
    border-radius: 15px;
    
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo {
    
      margin: 10px 0 10px 0;
    }

    .card {
      border-radius: 5px;
     
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;

export default CardInfo;
