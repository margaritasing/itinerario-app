import React from 'react'
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
                </div>    
            </div>   
    
    </Section>
  )
}


const Section = styled.section`

.middle {
    display:flex;
    justify-content:space-around;
    align-items:center;
}



  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .content-usuario{
      margin-left:20px;
      margin-right:20px;
    }  
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;


export default Middle