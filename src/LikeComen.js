import React, { useState } from 'react'
import avatar from './img/avatarImage.png'
import styled from "styled-components";
import axios from 'axios';

import { useStateValue } from "./reducer/StateProvider";

const LikeComen = (props) => {
  console.log(props)
  const [{user}, dispatch]=useStateValue()

  const likeDislike =  async () =>{
    console.log(user)
    const token=localStorage.getItem("token")
    await axios.put(`http://localhost:4000/api/likesDisLike/${props.id}`,{},{
      headers:{
        'Authorization':'Bearer '+ token //espacio ya aplicado
      }
    })
    .then(response=> console.log(response))
    
  }
  return (
    <Section>
        <div className='content-usuario'>

              <div className='avatar'>
                <img src={avatar} alt=".." />
                <p className='user'>User</p>        
              </div>

              <div className='like'>
                <button className='btn btn-like' onClick={likeDislike}><i className='far fa-heart'></i></button>
                <span>{props.likes.length}</span>        
              </div>
      
        </div>   
    </Section>
  )
}

const Section = styled.section`
.content-usuario{
  display:flex;
  justify-content:space-between;
  align-item:center;
  margin-top:10px;
}

.content-usuario img{
  border-radius:50%;
  width:50px;
  height:50px;
}

.content-usuario p{
  margin:10px;
}

.like i{
  font-size:30px;
  margin-top:5px;
}


  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .content-usuario{
      margin-left:20px;
      margin-right:20px;
    }

    
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    
  }
`;

export default LikeComen