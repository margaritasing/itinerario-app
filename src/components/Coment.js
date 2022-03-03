import React from "react";
import styled from "styled-components";


const Coment = () => {

    return(

        <Section>

        <div className="coment">

        <div className="input-group input-group-lg formato">
            
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"></input>
        </div>
               
        <p className="fas"><span className="me-2"><i className="fas fa-heart"></i></span>3</p>         
        </div>
  
        
        </Section>

        
    )
}

const Section = styled.section`  
  
  .coment{        
      width: 63%;
      margin-left: 270px;
  }

  .fas{
      font-size:30px;
      color:#9AD0EC;
      margin-top:10px;
  }

  

  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .coment{        
        width: 95%;
        margin-left:10px;

    }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;



export default Coment;