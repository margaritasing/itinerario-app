import React from 'react'
import styled from "styled-components";

export default function ItinerarioContinen() {
  const data = [
    {
      id:"001",
      name: "América",
      url:
        "",
    },
    {
      id:"002",
      name: "Europa",
      
    },
    {
      id:"003",
      name: "África",
      url:
        "",
    },
    {
      id:"004",
      name: "Oceanía",
      url:
        "",
    },
    {
      id:"005",
      name: "Asia",
      url:
        "",
    },
  ];

  
  return (
    <Section id="continente">
    {data.map((continente, index) => {
          <div className='itinerarioContinen'>
            <div className='nombre'>
              <h3>{continente.name}</h3>
            
            </div>       
        </div>

     
     
        })}
     </Section>
  
)

}
const Section = styled.section`


@media screen and (min-width: 280px) and (max-width: 720px) {

  





}
@media screen and (min-width: 720px) and (max-width: 1080px) {
  
}
`;

