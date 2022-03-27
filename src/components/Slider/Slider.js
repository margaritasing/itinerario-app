import React from "react";
import styled from "styled-components";


import Imagen1 from "../../img/Destination1.png"
import Imagen2 from "../../img/Destination2.png"
import Imagen3 from "../../img/Destination3.png"
import Imagen4 from "../../img/Destination4.png"
import Imagen5 from "../../img/Destination5.png"
import Imagen6 from "../../img/Destination6.png"

 const Slider = () => {
  return (
    <Section>
    <div className="galeria">
    <h1>Itinerary Favorite</h1>
   
    <div className="contenedor-imagenes">
        <div className="imagen">
            <img src={Imagen1} alt=""></img>            
            <div className="overlay">
                <h2>Ciudad de Mexico</h2>
            </div>
        </div>
        <div className="imagen">
            <img src={Imagen2} alt=""></img>
            <div className="overlay">
                <h2>La Paz</h2>
            </div>
        </div>
        <div className="imagen">
            <img src={Imagen3} alt=""></img>
            <div className="overlay">
                <h2>Estocolmo</h2>
            </div>
        </div>
        <div className="imagen">
            <img src={Imagen4} alt=""></img>
            <div className="overlay">
                <h2>Lisboa</h2>
            </div>
        </div>
        <div className="imagen">
            <img src={Imagen5} alt=""></img>
            <div className="overlay">
                <h2>Montevideo</h2>
            </div>
        </div>
        <div className="imagen">
            <img src={Imagen6} alt=""></img>
            <div className="overlay">
                <h2>Paris</h2>
            </div>
        </div>          
    </div>
</div>
    </Section>
  );
};

const Section = styled.section`
div{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color:#edffe1;
   
}


.galeria h1{
    text-align: center;
    margin:20px 0 15px 0;
    font-weight: 300;
}

.linea{
    border-top: 5px solid #0077C0;
    margin-bottom: 40px;
}

.contenedor-imagenes{
    display:flex;
    width: 85%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color:aliceblue;
   
}

.contenedor-imagenes .imagen{
    width: 32%;
    position: relative;
    height:250px;
    margin-bottom:10px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .75)
}
.imagen img{
    width: 100%;
    height:100%;
    object-fit: cover;
    
}

.overlay{
    position: absolute;
    bottom: 0;
    left: 0;
    background:rgba(0, 118, 192, 0.781) ;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: .5s ease;
}

.overlay h2{
    color: #fff;
    font-weight: 300;
    font-size:30px;
    position: absolute;
    top: 50%;
    left:50%;
    text-align: center;
    transform: translate(-50%, -50%);
}

.imagen:hover .overlay{
    height:100%;
    cursor: pointer;
}

@media screen and (max-width:1000px){
    .contenedor-imagenes{
        width: 95%;
    }
}

@media screen and (max-width:700px){
    .contenedor-imagenes{
        width: 90%;
    }
    .contenedor-imagenes .imagen{
        width: 48%;
    }
}

@media screen and (max-width:450px){
    h1{
        font-size:22px;
    }
    .contenedor-imagenes{
        width: 98%;
    }
    .contenedor-imagenes .imagen{
        width: 80%;
    }
}
`;



export default Slider;
