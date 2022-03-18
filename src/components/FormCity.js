import React from "react";
import {actionType } from "../reducer/reducer"
import { useStateValue } from "../reducer/StateProvider"
import styled from "styled-components";





const FormImg = () => {  
  
  const [cities, dispatch] = useStateValue()

      const inputSearch = (event) =>{
          dispatch({
            type:actionType.FILTER,
            value:event.target.value
          })
      }

  return (
    <>
     <Section>
         <form className="offset-md-5 my-3">
            <label className=" mt-3">
            <input  className=" input-search form-control form-control-lg" type="text" placeholder="Search" onChange={inputSearch}  />
            </label>        
        </form>    
     </Section>
      

    </>
  );
};

const Section = styled.section`
 
  .input-search {
    border-radius:40px;
    width:100%;

    
  }
  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .snip1314 {        
        margin-top:5px;
        margin-left:25px;
       
      }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;


export default FormImg;




