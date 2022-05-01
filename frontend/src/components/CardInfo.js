import React, { useState } from "react";
import styled from "styled-components";
import LikeComen from "./LikeComen";
import Coment from "./Coment";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const CardInfo = (props) => { 
 

  return (
       <Section>                                
           <div className="cardinfo">
           <div className="container">
           <div className="row">
           {props.itinerary.map( data=> 
              <div className="card col-md-9" key={data._id}>  
              <div className="imagen"  style={{borderRadius:"40px"}}>
              <img src={data.image} className="img-fluid" alt="..." />                   
              </div>                        
              <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
                  <p className="card-text" style={{ textIndent:"40px"}}>{data.description}</p> 
                  <p className="card-text text-white">{data.time}</p>
                  <p className="card-text text-white"><small className="">{data.price}</small></p>
              </div>  

              <div className="my-2">
                  <Accordion className="acordeon" style={{backgroundColor:"#FFCDDD", borderRadius:"50px"}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header" className="my-3"
                    >
                      <Typography style={{textAign:"center", marginLeft:"300px"}}>See More</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <div className="my-2">
                    <Coment itinerary={data._id} />
                    <LikeComen likes={data.likes} id={data._id}/>     
                    </div>                        
                    </AccordionDetails>
                  </Accordion>      
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
    margin-top:5px;
    color:#fff;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    text-align:justify;
    

    
    
  } 

  .card{
    background-color:#8946A6;
    display:flex;
    margin:80px 10px 10px 10px;   
    border-radius: 53px;
    background: linear-gradient(145deg, #dd8be8, #ba75c3);
    box-shadow:  8px 8px 16px #633e68,
             -8px -8px 16px #ffc6ff;
 
  }

  .acordeon{
    margin:10px;  
    
  }
  
  
  
  .MuiTypography-root p {
    
    text-align:center;
    margin-left:100px;
   
  }
 
  img {
    width:100%;
    height:300px;
    margin-top:10px; 
    border-radius: 53px;
      
    
  }

 

  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo {    
      margin: 10px 0 10px 0;
    }

    Typography {
      marginLeft:100px
    }

    .card {
      margin:10px;
      width:95%;
      background: linear-gradient(145deg, #dd8be8, #ba75c3);
      box-shadow:  4px 4px 8px #633e68,
             -8px -8px 16px #ffc6ff;    
     
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;

export default CardInfo;
