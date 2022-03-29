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
                  <button type="button" class="btn ">Read More</button>                 
                </LinkRouter> 
              </div>              
             
        </div>              
        </Section>
    
    
  )
}


const Section = styled.section`
.middle{
  display:flex;
  justify-content:space-around;  
}

.text-middle{
  margin-top:80px;
}

h2{
  margin-bottom:50px;
}

ul{
  margin-top:30px;
}

li::marker {
  color: green;
  font-size: 15px;

}

li{
  margin-top:20px;
  margin-bottom:30px;
}

button{
  margin-top:50px;
  margin-left:160px;
  background-color:#0d6efd;
  color:#fff;
}



  
  @media screen and (min-width: 280px) and (max-width: 720px) {

    .middle{
       flex-direction: column;
    }
    img{
      width:350px;
      height:350px;
      margin-left:10px;
    }

    h2{     
      margin: 15px;
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