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
              <div className="imagen">
              <img src={data.image} className="img-fluid rounded-start" alt="..." />                   
              </div>                        
              <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">{data.description}</p>
                  <p className="card-text"><small className="text-muted">{data.price}</small></p>
              </div>  

              <div>
                  <Accordion className="acordeon">
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
    margin-top:30px;
    
    
  } 

  .card{
    display:flex;
    margin-top:80px;
 
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
      
    
  }

  .card-img{
   
  }

  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .cardinfo {    
      margin: 10px 0 10px 0;
    }

    Typography {
      marginLeft:100px
    }

    .card {
      border-radius: 5px;
     
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;

export default CardInfo;
