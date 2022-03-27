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

import Swal from "sweetalert2";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import axios from 'axios';

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  /* SignUp con Google start */
    /* const responseGoogle = async (response) => {
    console.log(response);
    const NuevoUsuario = {
      firstname: response.profileObj.givenName,
      lastname: response.profileObj.familyName,
      email: response.profileObj.email,
      password:response.googleId + "aB",
      from:"Google"
    }

    
   await axios.post("http://localhost:4000/api/signup",{NuevoUsuario} )
   .then(response=>    
   displayMessages(response.data)
 )
 function displayMessages(data){
  if(data.success==="falseVAL"){
    console.log(data)
   console.log(data.response.error.details)
  alert(data.response.error.details.map(error=>error.message))
  }else if(data.success===true){
    Swal.fire(
      'Good job!',
      'Registered user with Google!',
      'success'
    )
    console.log(data)
  }
 }
    
  }  */

  /* SignUp con Google end */

  /* Aqui comienza el sign up de facebook */

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

      await axios.post("http://localhost:4000/api/signup",{NuevoUsuario} )
      .then(response=> //alert(response.data.response)) 


      displayMessages(response.data)
      ) 

      
      function displayMessages(data){
      if(data.success==="falseVAL"){
          console.log(data)
          console.log(data.response.error.details)
          alert(data.response.error.details.map(error=>error.message))
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
                          imageUser:event.target[8].value,
                          firstname:event.target[0].value,
                          lastname:event.target[2].value,
                          email:event.target[4].value,
                          password:event.target[6].value,
                          from:"SignUp"                        
                        }  
            console.log(NuevoUsuario)
 
   await axios.post("http://localhost:4000/api/signup",{NuevoUsuario} )
   .then(response=> //alert(response.data.response)) 
  
   
   displayMessages(response.data)
 )
 function displayMessages(data){
  if(data.success==="falseVAL"){
    console.log(data)
   console.log(data.response.error.details)
  alert(data.response.error.details.map(error=>error.message))
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
         <form className={classes.form} noValidate onSubmit={NewUser}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>            
            
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        <br />
        { /* <GoogleLogin
          clientId="971845975096-d96pfrveho1431brgjcu4m4a2leibuei.apps.googleusercontent.com"
          buttonText="SingUp with Google Account"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}/>
  <br /> */}
        <FacebookLogin
          appId="1062880977629069"
          autoLoad={false}
          fields="name,email,picture"        
          callback={responseFacebook} />
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
