import React from 'react'
import "./style.css"
import Imagen from '../../img/Destination6.jpg'
import { useStateValue } from "../../reducer/StateProvider";
import { Link } from "react-router-dom";

const CardComponente = () => {
    const [{filterCity}] = useStateValue() 
    console.log(filterCity)
  return (
    <div className='contenedores'>
    <div className='wrapper'> 
    {filterCity?.map(destination => (
    <div className='cartas'>
        <img src={destination.image} alt=""/>
        <div className='info'>
            <h1>{destination.name}</h1>
            <p>Region: {destination.region}
            </p>    
            <p>Demonym: {destination.demonym}</p>
            <p> <span> Languaje: {destination.language}</span></p>
            <p className='titulo'>{destination.description}</p>
            <Link type="button"  className="btn btn-info  w-80  my-3 text-white" to={"/city/" + destination._id}><span>Read More</span></Link>
        </div>    
    </div> 
    ))}
    
    </div>
    
  </div>

    

  )
}

export default CardComponente