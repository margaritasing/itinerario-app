import "./AddFormRegister.css";
import Swal from "sweetalert2";
import { Link as LinkRouter } from "react-router-dom";

import axios from "axios";
import FacebookLogin from 'react-facebook-login';


function AddFormRegister() {



  const responseFacebook = async (response) => {
    console.log(response);

    const NuevoUsuario = {
                        imageUser :response.picture.data.url,                    
                        email:response.email,
                        firstname:response.name,
                        lastname:"facebook",            
                        password:response.id + "aB", 
                        from:"Facebook"    
    }  

      await axios.post("https://itinerarioapp.herokuapp.com/api/signup",{NuevoUsuario} )
      .then(response=> 


      displayMessages(response.data)
      ) 

      
      function displayMessages(data){
      if(data.success==="falseVAL"){
        let errorDetalles = data.response.error.details  
        console.log(errorDetalles)      
        errorDetalles.map(
          error =>
          Swal.fire({
            icon: 'error',
            title: error,
            text: error.message            
          })
          )
         
         
      }else if(data.success===true){
          Swal.fire(
          'Good job!',
          'Registered user with Facebook! <br /> I update the singin, now you can do it with Facebook',
          'success'
          )
      console.log(data)
      }
    }
  }

  /* Final del sign in de facebook */

  /* SignUP start */
  async function NewUser(event){
    event.preventDefault()
    
    const NuevoUsuario = {
                          imageUser:"allowExtraEmails",
                          firstname:event.target[0].value,
                          lastname:event.target[1].value,
                          email:event.target[2].value,
                          password:event.target[3].value,
                          from:"SignUp"                        
                        }  
            console.log(NuevoUsuario)
 
   await axios.post("https://itinerarioapp.herokuapp.com/api/signup",{NuevoUsuario} )
   .then(response=> 
  
   
   displayMessages(response.data)
 )
 function displayMessages(data){
  if(data.success==="falseVAL"){
    let errorDetalles = data.response.error.details 
    console.log(errorDetalles)    
    errorDetalles.map(
      error =>     
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: error.message   
      })
      )
  }else if(data.success===true){
    Swal.fire(
      'Good job!',
      'Registered user with SingIn!, <br /> We have sent an e-mail to verify your e-mail address',
      'success'
    )
    console.log(data)
  }
 }
  }

  /* SIgn UP End */
 


 
  return (
    <div className="afl-container">
      <form className="form-login-container" type="submit" onSubmit={NewUser}>
        <div className="full-width">
          <h2 className="form-title text-align-center">Register</h2>
          <h3 className="form-body text-align-center">
            Please register using account detail bellow.
          </h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Enter your first name"
            />
          </label>
          <label>
          <input
            className="form-input"
            name="lastname"
            id="lastname"
            type="text"
            placeholder="Enter your last name"
          />
        </label>
          <label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"           
              placeholder="Enter your email"
            />
          </label>
        
          <label>
            <input className="form-input" type="password" placeholder="Password" />
          </label>
       
        </div>
        <div className="full-width">
          <button type="submit" className="form-login__button--send">Create Account</button>
        </div>
        <FacebookLogin
        appId="1062880977629069"
        autoLoad={false}
        fields="name,email,picture"        
        callback={responseFacebook} />
        <div className="full-width">
          <h3 className="form-body text-align-center">
            You have an Account?{ }    
            </h3>
          
        </div>
      </form>
    </div>
  );
}
export default AddFormRegister;
