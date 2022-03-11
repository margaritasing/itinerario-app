import React from "react";
import {actionType } from "../reducer/reducer"
import { useStateValue } from "../reducer/StateProvider"




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
      <form>
        <label className="w-80 mt-3 ms-4 ">
          Buscar: <input className="w-80" type="text" onChange={inputSearch} name="inputText" />
        </label>        
      </form>
      

    </>
  );
};



export default FormImg;




