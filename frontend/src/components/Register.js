import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { useStateValue } from '../reducer/StateProvider';
import axios from 'axios';
import { actionType } from "../reducer/reducer";
import Swal from "sweetalert2";
import styled from "styled-components";
 
function Register() {

  const [{ user }, dispatch] = useStateValue()

    async function cerrarCesion() {
        const email = user.datosUser.email
        console.log(email)
        await axios.post("https://itinerarioapp.herokuapp.com/api/signOut", {email})
        .then(response =>{                   
            if(response.data.success) {
              localStorage.removeItem("token")
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Come back soon, thanks for your visit',
                showConfirmButton: false,
                timer: 1500
              })
              dispatch({
                type:actionType.USER,
                user:null
              })
              
            }
          

           })

    }


  const [showMenu, setShowMenu] = React.useState(false);
  function mostrarMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <Section>
    <div className="h-registro">
    <>
      <button className="d-flex mx-5" style={{backgroundColor: "#fff", borderRadius:"25px", padding:"10px"}} onClick={mostrarMenu}>
        <i className="fas fa-user"></i>
      </button>
      {showMenu && (
        <div className="h-usuario">
          { !user?
            <LinkRouter to="/signin">
            <button type="button" className="btn btn-dark bg-dark text-white mt-2">
              Sign In
            </button>
          </LinkRouter> :
          <LinkRouter to="/signout">            
          <button type="button" className="btn btn-info bg-warning  text-white  mt-2"  onClick={() => cerrarCesion()}>
          Sign Out</button> 
          </LinkRouter>    
          }
          <LinkRouter to="/signup">
            <button type="button" className="btn btn-info bg-info  text-white  mt-2">
              Sign Up
            </button>
          </LinkRouter>


        </div>
      )}
    </>
  </div>
    
    
    </Section>
  );
}

const Section = styled.section`

.h-usuario{
  float:right;
  position:absolute;
  top: 10vh;
  height: 10vh;
  width: 40%;
  
}

.h-usuario button{
  margin:5px;
}


@media screen and (max-width:1000px){
    
}

@media screen and (max-width:700px){
    
}

@media screen and (max-width:450px){

  .h-registro{
    margin-left:150px;
  }
  .h-usuario{ 
    display:flex;
    justify-content:space-between;
    margin:10px;     
    top: 30vh; 
     
  }

  .h-usuario button{
    margin:15px 25px 15px 0px;
    width:100%;
  }
    
}
`;


export default Register;