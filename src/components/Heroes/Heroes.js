import React from "react";

import styled from "styled-components";




const Heroes = () =>{

    return(    
        <Section>
            <div className="heroes">
                <h1>Travel routes so that everything goes perfect</h1>
                <ul>
                    <li> <strong> What to see each day,</strong>in what order and how to go from one visit or city to the next</li>
                    <li>Choose destination, number of days and in the Detailed Route you will have your trip assembled in a second</li>
                    <li>Charming hotels and authentic restaurants with selected links to book at the best price</li>
                    <li>Print your route and follow it for free on our App with geolocated maps</li>            
                </ul>                
            </div>        
        </Section>
    
    )
}
const Section = styled.section`
.heroes{
    height:250px;
    margin:30px;   
}

h1{    
    margin:20px;
}

li::marker {
    color: green;
    font-size: 25px;
  
  }

ul{
    margin-left:70px;
    margin:bottom:20px;
}

li {
    font-size:20px;
}
  
  
  @media screen and (min-width: 280px) and (max-width: 980px) {
    .heroes{
        height:350px;
        margin:0;   
    }

    ul{
        margin-left:0px;
        margin:bottom:120px;
    }

    li::marker {
        color: green;
        font-size: 15px;
      
      }

    li {
        font-size:15px;
        padding:5px;
    }
   
  }
`;


export default Heroes;