import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
 
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
//import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import { useStateValue } from '../reducer/StateProvider';
import { actionType } from '../reducer/reducer';
import axios from 'axios';
import Swal from 'sweetalert2';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/margaritasing">
        Mi GitHub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
const [{ user }, dispatch] = useStateValue()

/* const responseGoogle = (response) => {
  console.log(response);
  
} */

const responseFacebook = async (response) => {
  console.log(response);

  const userData = {
    email: response.email,
    password: response.id +"aB",
}
 await axios.post("https://myitinerary.up.railway.app/api/signin",{userData} )
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
        event.preventDefault() // previene el comportamiento por defecto del botón submit, que es limpiar el formulario
           const userData = {
            email: event.target[0].value,
            password: event.target[2].value,
        }

        await axios.post("https://myitinerary.up.railway.app/api/signin",{userData} )
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={loginUser}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          
        </form>   
      </div>
      <br />
     {/* <div className="google" style={{marginLeft:"50px"}}>
     <GoogleLogin
     clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
     buttonText="SingIn with Google Account"
     onSuccess={responseGoogle}
     onFailure={responseGoogle}
     cookiePolicy={'single_host_origin'}
   />
  </div> */}
   <div className="facebook" style={{marginTop: "10px", marginLeft:"65px"}}>
   <FacebookLogin
         appId="1062880977629069"
         autoLoad={false}
         fields="name,email,picture"        
         callback={responseFacebook}
          />    
   </div>     
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}
