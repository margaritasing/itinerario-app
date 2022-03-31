import React from 'react'
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { actionType } from '../reducer/reducer';
import { useStateValue } from '../reducer/StateProvider';

 const ItinerarioContinen = () => {
    const [{cities, cityContinente, filterCity}, dispatch] = useStateValue()
  const data = [
    {
      id:"001",
      name: "America",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continentes%2Fcontinente%20(3).png?alt=media&token=3a602c11-88cc-4ca3-b403-4b5dbe98e569",
    },
    {
      id:"002",
      name: "Europe",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continentes%2Fcontinente%20(2).png?alt=media&token=e0d461aa-604d-440a-8ae9-e313955b0ddb",
    },
    {
      id:"003",
      name: "África",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continentes%2Fcontinente%20(5).png?alt=media&token=88c3da38-f79a-4cc5-b150-31dcba46bb2f"
    },
    {
      id:"004",
      name: "Oceania",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continentes%2Fcontinente%20(4).png?alt=media&token=c093f4e0-ac91-484c-95de-ae0f00d87334",
    },
    {
      id:"005",
      name: "Asia",
      image:"https://firebasestorage.googleapis.com/v0/b/itinerary-app-react.appspot.com/o/continentes%2Fcontinente%20(1).png?alt=media&token=47a63fde-1d3e-45e8-9cbb-72879456131f"      
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
           
            <button className='btn' onClick={() => filtroContinent(continente.name)}>
              <div className="icon">
                    <img src={continente.image} alt="" />
              </div>
                    <h3>{continente.name}</h3>                
            </button>                    
             
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
    display: flex;
    flex-direction: column;   
    padding: 2rem;  
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        width:7rem;
        margin-left:50px;
        height: 7rem;
        
      }
    }
  }

  h3{
    text-align:center;
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));



    .continente {     
      margin-top:30px;     
          .icon {
            img {
              width:7rem;
              margin-left:80px;
              height: 7rem;
            }
          }
        }
      }
    }

  
    

  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ItinerarioContinen

