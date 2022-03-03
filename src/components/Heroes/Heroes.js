import React from "react";

import Imagen from "../../img/ImgCity/Napoles.jpg"




const Heroes = () =>{

    return(    
        <div className="heroes" style={{marginTop: "0" }}>
                <div className= "container my-5" style={{backgroundColor: "aliceblue", marginTop: "0" }}>
                        <div className= "row p-4 pb-0 pe-lg-0 pt-lg-3 align-items-center rounded-3 border shadow-lg">
                        <div className= "col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className= "display-4 fw-bold lh-1">Naples is a city in southern Italy that is located on the Gulf of Naples</h1>
                            <p className= "lead">Naples is a city in southern Italy that is located on the Gulf of Naples. Nearby is Mount Vesuvius, the still-active volcano that destroyed the nearby Roman city of Pompeii. Naples dates from the second millennium BC. C. and has centuries of important art and architecture</p>
                            <div className= "d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className= "btn btn-primary btn-lg px-4 me-md-2 fw-bold">Read More</button>            
                            </div>
                        </div>
                    <div className= "col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className= "rounded-lg-3" src={Imagen} alt=""  style={{width: "820", height: "450px"}}></img>
                </div>
            </div>
            </div>
        </div>
    
    )
}


export default Heroes;