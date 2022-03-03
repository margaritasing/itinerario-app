import React from "react";
import { Link as LinkRouter } from "react-router-dom";

function Register() {
  const [showMenu, setShowMenu] = React.useState(false);
  function mostrarMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }
  return (
    <div className="h-registro">
      <>
        <button className="d-flex me-6" style={{backgroundColor: "#fff", borderRadius:"25px", padding:"10px"}} onClick={mostrarMenu}>
          <i className="fas fa-user"></i>
        </button>
        {showMenu && (
          <div className="h-usuario">
            <LinkRouter to="/signin">
              <button type="button" className="btn btn-dark bg-dark text-white mt-2">
                Sign In
              </button>
            </LinkRouter>

            <LinkRouter to="/signup">
              <button type="button" className="btn btn-info bg-info  text-white ms-3 mt-2">
                Sign Up
              </button>
            </LinkRouter>
          </div>
        )}
      </>
    </div>
  );
}

export default Register;