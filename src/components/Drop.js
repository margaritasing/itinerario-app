import React from 'react'
import CardInfo from './CardInfo'
import Coment from './Coment'
import LikeComen from './LikeComen'
import {FaTrashAlt} from "react-icons/fa";
import { MdCreate } from "react-icons/md";

const Drop = (props) => {

    console.log(props.itinerary)
  return (
    <div>
    <>
     
    <div className="accordion d-grid col-10 mx-4" id="accordionExample">



    {/* <div className="accordion-item"> */}
    
      <h2 className="accordion-header " id="headingOne">
        <button className="accordion-button   "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          COMMENTS
        </button>

      </h2>
      <br />
      
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
      >
       <div className="d-flex position-relative mx-3 ">
       
       

            

      
          <div className="floating" >
          
           
                  <FaTrashAlt/> 
                
             <MdCreate/>
                           

          </div>
          
         
       
       
        </div>

        
      

         {/* BODY  */}
        <div className="accordion-body">
        {props.itinerary.map( data=> 
        <div className=''>
                  
        </div>
        )}
        </div>

      {/* </div> */}
    </div>
  </div>
  </>
  );
    
    
    </div>
  )
}

export default Drop