import React, {useState} from "react";
import {actionType } from "../reducer/reducer"
import { useStateValue } from "../reducer/StateProvider"

import { Switch } from "@mui/material";





const FormImg = () => {  

  const [filtro, setFiltro] = useState("Filter by City")  
  const [checked, setChecked] = useState(true)
  const [cities, dispatch] = useStateValue()

  const handleChange = (event) =>{
    setChecked(event.target.checked)
    event.target.checked? setFiltro("Filter by City"): setFiltro("Filter by Continent")
  }

      const inputSearch = (event) =>{
            dispatch({
            type:actionType.FILTER,
            value:{value: event.target.value, filterBy:filtro}
          })
      }

  return (
    <> 

        <div className="container">
        <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="titlepage text-center">
            <h2>{filtro}</h2>            
          </div>          
        </div>         
      </div>
      
      <div className="row">
        <div className="col-sm-12 col-md-12"> 
          <div className="text-center">
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{'aria-label': 'controlled'}}
              />                                        
          </div>          
        </div>        
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-12  content-input-switch">
        <input type="text" 
        id="flitroBusqueda" 
        placeholder={filtro} 
        className="form-control selector text-center"
        style={{borderRadius:"15px"}}
        onChange={inputSearch}
        />                    
        </div>
      
      </div>
        
        </div>
        
   

    </>
  );
};



export default FormImg;




