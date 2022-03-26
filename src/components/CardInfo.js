import React from "react";
import styled from "styled-components";
import LikeComen from "../LikeComen";
import Coment from "./Coment";


const CardInfo = (props) => {

  console.log(props.itinerary)
 

  return (
       <Section>                                
           <div className="cardinfo">
           <div className="container">
           <div className="row">
           {props.itinerary.map( data=> 
              <div className="card col-md-9 my-4" key={data._id}>  
              <div className="imagen">
              <img src={data.image} className="img-fluid rounded-start" alt="..." />                   
              </div>                        
              <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text"><small className="text-muted">{data.price}</small></p>
              </div>
              <div className="my-3">
               <Coment itinerary={data._id} />  
               <LikeComen likes={data.likes} id={data._id}/>         
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
    margin-left:280px;
    margin-top:30px;
    
  } 

  .card{
    display:flex;
 
  }

  .card-body{
     
    
   
  }

  h5 {
    

   
  
    
  }

  p{
   
  }
 
  img {
    width:100%;
    height:300px;
    margin-top:10px; 
      
    
  }

  .card-img{
   
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
