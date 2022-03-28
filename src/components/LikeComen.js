import React, { useState } from 'react'
import avatar from '../img/avatarImage.png'
import styled from "styled-components";
import axios from 'axios';

import { useStateValue } from "../reducer/StateProvider";

const LikeComen = (props) => {
  
  const [{user}, dispatch]=useStateValue()
  const [likes, setLikes] =useState(props.likes)

  const likeDislike =  async () =>{    
    const token=localStorage.getItem("token")
    await axios.put(`http://localhost:4000/api/likesDisLike/${props.id}`,{},{
      headers:{
        'Authorization':'Bearer '+ token //espacio ya aplicado
      }
    })
    .then(response=> setLikes(response.data.response))    
  }

 
  
  let colorCorazon=likes?.includes(user?.datosUser.id)? 'fas fa-heart-circle':"fas fa-heart"   
  

  return (
    <Section>
        <div className='content-usuario'>

              <div className='avatar'>
              {user?
                <img src={user?.datosUser.imageUser} alt=".." />
                :                
                <img src={avatar} alt=".." />
              }
                <p className='user mx-0'>{user?.datosUser.firstname}</p>      
              </div>

              <div className='like mx-3 my-2'>
                <button className='btn btn-like' onClick={likeDislike}><i className={colorCorazon}></i></button>
                <span>{likes.length}</span>        
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

.fas { 
  color:red;
}

.like i{
  font-size:30px;
  margin-top:5px;
}

.avatar img{
  width:50px;
  height:50px;
  margin-left:25px;

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