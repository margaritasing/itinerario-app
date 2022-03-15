import React from "react";

import styled from "styled-components";



const Opinion = () =>{


    return(
        <Section>
        <figure className="snip1314"><img src="https://w3travelsecuritycl.s3.amazonaws.com/notas/obelisco-buenos-aires.jpg" alt="sample13"/>
          <div className="border one">
              <div></div>
          </div>
          <div className="border two">
             <div></div>
          </div>
          <figcaption>
             <blockquote>It is a beautiful city, nice to travel any month of the year.</blockquote>
             <h5>Indigo Violet<span>LittleSnippets</span></h5>
          </figcaption><a href="#"></a>
      </figure>
      <figure className="snip1314 hover"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Maracaibo_panoramica_avenida_Cecilio_Acosta_cuted_%28cropped%29.jpg" alt="sample96"/>
        <div className="border one">
          <div></div>
        </div>
        <div className="border two">
          <div></div>
        </div>
        <figcaption>
          <blockquote>It is a beautiful city, nice to travel any month of the year.</blockquote>
          <h5>Will Barrow<span>LittleSnippets</span></h5>
        </figcaption><a href="#"></a>
      </figure>
      <figure className="snip1314"><img src="https://media.istockphoto.com/photos/bogota-cityscape-of-big-buildings-and-mountains-and-blue-sky-picture-id1182337590?k=20&m=1182337590&s=612x612&w=0&h=h4SZnF6gHCUvIYuy9CMr-qdlu9TebhA1z7JzVvF3m1Y=" alt="sample92"/>
        <div className="border one">
          <div></div>
        </div>
        <div className="border two">
          <div></div>
        </div>
        <figcaption>
          <blockquote>It is a beautiful city, nice to travel any month of the year.</blockquote>
          <h5>Lance Bogrol<span>LittleSnippets</span></h5>
        </figcaption><a href="#"></a>
      </figure>  
</Section>
    )

}

const Section = styled.section`
.snip1314 {
   
    position: relative;
    float: left;
    overflow: hidden;   
    margin-top:20px;
    margin-left:100px;
    padding: 6px;
    min-width: 230px;
    max-width: 315px;
    width: 100%;
    box-shadow: none !important;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-box-sizing: border-box5
    box-sizing: border-box;
    color: #ffffff;
    font-size: 16px;
  }
  .snip1314 * {
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
  .snip1314 img {
    max-width: 100%;
    height: 250px;
    vertical-align: top;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  }
  .snip1314 .border {
    position: absolute;
    opacity: 0.45;
    z-index: 1;
  }
  .snip1314 .border:before,
  .snip1314 .border:after,
  .snip1314 .border div:before,
  .snip1314 .border div:after {
    background-color: #f5b043;
    position: absolute;
    content: "";
    display: block;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .snip1314 .border:before,
  .snip1314 .border:after {
    width: 0;
    height: 1px;
  }
  .snip1314 .border div:before,
  .snip1314 .border div:after {
    width: 1px;
    height: 0;
  }
  .snip1314 .border.one {
    left: 0;
    top: 0;
    right: 12px;
    bottom: 12px;
  }
  .snip1314 .border.one:before,
  .snip1314 .border.one div:before {
    left: 0;
    top: 0;
  }
  .snip1314 .border.one:after,
  .snip1314 .border.one div:after {
    bottom: 0;
    right: 0;
  }
  .snip1314 .border.two {
    left: 12px;
    top: 12px;
    right: 0;
    bottom: 0;
  }
  .snip1314 .border.two:before,
  .snip1314 .border.two div:before {
    right: 0;
    top: 0;
  }
  .snip1314 .border.two:after,
  .snip1314 .border.two div:after {
    bottom: 0;
    left: 0;
  }
  .snip1314 figcaption {
    left: 6px;
    right: 6px;
    top: 6px;
    bottom: 6px;
    position: absolute;
    padding: 30px;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .snip1314 blockquote {
    
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.6em;
    font-style: italic;
    letter-spacing: 1px;
    padding: 0;
    margin: 0;
  }
  .snip1314 h5 {
    display: inline-block;
    font-size: 1em;
  }
  .snip1314 h5 span {
    font-weight: normal;
    margin-left: 5px;
    opacity: 0.5;
  }
  .snip1314 h5:before {
    content: '- ';
  }
  .snip1314 a {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  .snip1314:hover .border:before,
  .snip1314.hover .border:before,
  .snip1314:hover .border:after,
  .snip1314.hover .border:after {
    width: 100%;
  }
  .snip1314:hover .border div:before,
  .snip1314.hover .border div:before,
  .snip1314:hover .border div:after,
  .snip1314.hover .border div:after {
    height: 100%;
  }
  .snip1314:hover figcaption,
  
  /* Demo purposes only */
  body {
    background-color: #212121;
  }
  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .snip1314 {        
        margin-top:5px;
        margin-left:25px;
       
      }
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;


export default Opinion;


