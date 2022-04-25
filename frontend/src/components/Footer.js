
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer className="" style={{ backgroundColor:"#AB46D2" , color:"#fff",fontFamily:"Satisfy, cursive", fontSize:"25px"}}>
      <span style={{fontSize:"35px"}}> My Itinerary</span>
      <span style={{color:"#fff"}}>Copyright &copy; 2022</span>
      <ul className="links" >
        <li >
        <Link  style={{color:"#fff"}} className="nav-link active" aria-current="page" to="/">
                  Home
          </Link>
        </li>
        <li>
        <Link  style={{color:"#fff"}}  className="nav-link" aria-current="page" to="/cities">
                  Cities
         </Link>
        </li>
        
      </ul>
      <ul className="social__links">        
        <li>
        <a href="https://twitter.com/LibiaMFM"><BsTwitter/></a>        
        </li>   
        <li>
        <a href="https://www.linkedin.com/in/libia-m-freites-m/"><BsLinkedin /></a>  
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    margin:0;
    padding:0;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;