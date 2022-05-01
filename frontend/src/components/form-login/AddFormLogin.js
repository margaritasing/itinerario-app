import "./AddFormLogin.css";
import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import Swal from 'sweetalert2'; 

import { useStateValue } from '../../reducer/StateProvider';
import { actionType } from '../../reducer/reducer';






function AddFormLogin() {

  const [{ user }, dispatch] = useStateValue()


const responseFacebook = async (response) => {
  console.log(response);

  const userData = {
    email: response.email,
    password: response.id +"aB",
}
 await axios.post("https://itinerarioapp.herokuapp.com/api/signin",{userData} )
    .then(response =>

        displayMessages(response.data),
    )
  
function displayMessages(data) {
  console.log(data)
    if (!data.success) {      
      localStorage.setItem("token", data.response.token) 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'The username and/or password is incorrect!'        
      })
      
    }
    else {       
      localStorage.setItem("token", data.response.token)  
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500
      })
      
          
    }
    dispatch({
        type: actionType.USER,
        user: data.response
    })    
}
  
}
    async function loginUser(event) {
        event.preventDefault() 
        console.log(event.target[1].value)
      
           const userData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }

        await axios.post("https://itinerarioapp.herokuapp.com/api/signin",{userData} )
            .then(response =>

                displayMessages(response.data),
            )
        function displayMessages(data) {
          console.log(data)
            if (!data.success) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'The username and/or password is incorrect!'        
              })
            }   
            else {
              localStorage.setItem("token", data.response.token)
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Welcome',
                showConfirmButton: false,
                timer: 1500
              })
              
              }
            

            dispatch({
                type: actionType.USER,
                user: data.response
            })
            
        }
       
    }


  

  return (
    <div className="afl-container">
      <form className="form-login-container" onSubmit={loginUser}>
        <div className="full-width">
          <h2 className="form-title text-align-center">Login</h2>
          <h3 className="form-body text-align-center">Please login using account detail bellow.</h3>
        </div>
        <div className="full-width form-inputs-container">
          <label>
            <input
              className="form-input"
              type="email"
              placeholder="Email Address"
            />
          </label>
          <label>
            <input className="form-input" type="password" placeholder="Password" />
          </label>
        </div>
       
        <div className="full-width">
          <button className="form-login__button--send" type="submit">Sign In</button>
        </div>
        <div className="facebook" style={{marginTop: "10px", marginLeft:"15px"}}>
        <FacebookLogin
              appId="1062880977629069"
              autoLoad={false}
              fields="name,email,picture"        
              callback={responseFacebook}
               />    
        </div> 
       
      </form>
    </div>
  );
}
export default AddFormLogin;
