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
                <button type="button" class="btn ">Read More</button>               
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
    img{
      width:300px;
      height:350px;
    }

    h2{     
      margin: 15px;
    }

    ul{  
      margin-left:20px;   
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