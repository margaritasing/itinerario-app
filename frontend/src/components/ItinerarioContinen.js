import React from 'react'
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from '../reducer/reducer';
import { useStateValue } from '../reducer/StateProvider';
import Imagen  from '../img/imagenviajes.png';

 const ItinerarioContinen = () => {
    const [{cities, cityContinente, filterCity}, dispatch] = useStateValue()
  const data = [
    {
      id:"001",
      name: "America",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continente%20png%2Famerica1.png?alt=media&token=18df9e8c-d2fc-4b7b-ae9c-76e1bac7dad4",
    },
    {
      id:"002",
      name: "Europe",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continente%20png%2Feuropa1.png?alt=media&token=4c0a0d0d-e6be-4d11-81ef-da8f156498eb",
    },
    {
      id:"003",
      name: "África",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continente%20png%2Fafrica1.png?alt=media&token=f55a3db5-9546-4f4b-a13a-0dc778290d42"
    },
    {
      id:"004",
      name: "Oceania",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continente%20png%2Foceania1.png?alt=media&token=5f5c5b96-11f3-48ab-ad4d-3cd8afee77ee",
    },
    {
      id:"005",
      name: "Asia",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continente%20png%2Fasia1.png?alt=media&token=00bedceb-2fb5-4f00-84f7-4135505d1891"      
      ,
    },
  ];

  const filtroContinent=(value) =>{
     dispatch({
       type: actionType.CITYCONTINENTE,
       value:value
     }) 
     console.log(value)
  }

  
      return (
        <Section>   
        
        {data.map((continente) => (       
            <div className="continente" key={continente.id}>
           
            <LinkRouter to="/cities" className='btn' onClick={() => filtroContinent(continente.name)}>
              <div className="icon">
                    <img src={continente.image} alt="" />
              </div>
                    <h3>{continente.name}</h3>                
            </LinkRouter>                    
             
          </div>       
        ))}
            </Section>
            
            )

    }

const Section = styled.section`
  
  margin:30px;  
  padding_bottom:2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr); 
  color:#0d6efd; 

  .continente {
    margin:10px;
    background:#A63EC5;
    border-radius:30px;
    display: flex;
    flex-direction: column;  
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7.5px );
    -webkit-backdrop-filter: blur( 7.5px );   
    border: 1px solid rgba( 255, 255, 255, 0.18 );
 
     
    .icon {
      
      img {
        width:7rem;       
        transition: 0.3s ease-in-out;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
         
        }        
        height: 7rem;
        
      }
    }
  }

 

  h3{
    text-align:center;
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));




  
    

  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ItinerarioContinen

