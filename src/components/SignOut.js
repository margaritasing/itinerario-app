import React from 'react'
import Imagen from '../img/singout.png'
import { Link as LinkRouter } from "react-router-dom";

const SignOut = () => {
  return (    
    <div className=" pt-5  text-center">
        <h1 className="display-4 fw-bold">MyItinerary</h1>
        <h2 className="display-4 fw-bold">Thanks for visiting us</h2>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">The best prices, with the best destinations, offers all year round, do not miss them <br/> The best place to choose where to spend your vacation MyItinerary.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <LinkRouter to="/">
             <button type="button" className="btn btn-info btn-lg me-sm-3">Home</button>          
          </LinkRouter>
          <LinkRouter to="/signin">
             <button type="button" className="btn btn-info btn-lg ">Sing In</button>          
          </LinkRouter>
          </div>
        </div>
        <div className="overflow-hidden" style={{maxHeight: '30vh'}}>
          <div className="container px-5">
            <img src={Imagen} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
          </div>
        </div>
      </div>
  )
}

export default SignOut