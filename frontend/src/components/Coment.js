import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useStateValue } from "../reducer/StateProvider";
import axios from 'axios';
import Swal from "sweetalert2";
import Avatar from 'react-avatar';



const Coment = (props) => {

    const [ {user}, dispatch ] = useStateValue()
    const [comment, setComment] = useState()

   

    const [reload, setReload] = useState(false)

    const [cambio, setCambio] = useState()

   const submitComent= async (event)=>{
       event.preventDefault()
       const dataComents={
           itinerario:props.itinerary,
           message:event.target[0].value,
           user:user.datosUser.id
        }        
      
        await axios.post("https://itinerarioapp.herokuapp.com/api/coments",{dataComents})
        .then(response =>           
            setComment(response.data.response.comentario))
            
            setReload(!reload)
        }
        
        useEffect(() => {
            let id= props.itinerary      
      
          axios.get(`https://itinerarioapp.herokuapp.com/api/coments/${id}`)
            .then(response =>{
                setComment(response.data.response.comentario)                
            })              
            
        }, [reload])//quito el reload y se ven los comentarios
        
        const borrarComentarios =async(id) =>{
            
          await  axios.delete(`https://itinerarioapp.herokuapp.com/api/coments/${id}`)
          .then( response => {
             let confirmacion = response.data.message         
              Swal.fire({               
                text: confirmacion,
                icon: 'success',             
                         
              })
            })         
            setReload(!reload)
        }
        
        const handleChange = (event) =>{
            setCambio(event.currentTarget.textContent)
            
        }
        
        const editar = async(id) =>{
            let data=cambio           
          await  axios.put(`https://itinerarioapp.herokuapp.com/api/coments/${id}`,{data})
            .then(response => {
              let confirmacion = response.data.mesagge
                 
              Swal.fire({               
                text: confirmacion,
                icon: 'success',               
                confirmButtonColor: '#3085d6',
                              
              })
            })
            setReload(!reload)
        }      
     
      
     
        
    return(

        <Section>

        <div className="coment">

        {comment?.map(item =>
            
             <div key={item._id}>
             {item.user.imageUser !==
              "allowExtraEmails" ? 
             <img src={item.user.imageUser} style={{width:"50px",
              height:"50px",
              marginLeft:"25px",
              borderRadius:"50%"
            }} alt=".." />:
           <div  className="mx-3 mt-3"> 
              <Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])}  name={item.user.firstname} round={true} size="50"/>            
           </div>
          }

          {item.user.lastname === "facebook"?
          <p>{item.user.firstname}</p>:
          <p>{item.user.firstname} <span>{item.user.lastname}</span></p>
          }

          {item.user._id === user?.datosUser.id ?
              <div>

                <div>              
                     <div className="comentario-" style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"15px", width:"100%", height:"auto", padding:"8px"}}  onInput={handleChange} contentEditable suppressContentEditableWarning
                     >{item.coment}</div>             
                </div>
                <div className="delete-edit">
                    <button type="button" className="btn btn-danger my-2 mx-1" onClick={()=> borrarComentarios(item._id)} ><i className="fas fa-trash-alt"></i></button>  
                    <button type="button" className="btn btn-warning mx-3" onClick={()=> editar(item._id)}><i className="fas fa-edit"></i></button>                
                </div>           
            </div>
            :
            <div>
                <div  className="comentario-" style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"15px", width:"100%", height:"auto", padding:"8px", fontSize:"auto"}}>{item.coment}</div>             
             </div>
        }
            </div>
            )}
             
          {user?
           <div className="formulario">
                <form onSubmit={submitComent}>        
                    
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label"></label>
                    <input type="text"  className="form-control w-100" style={{borderRadius:"50px"}} placeholder="Write us" />
                </div>                    
                   <div className="boton-envio">
                   <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane" /></button>                    
                   </div>      
                </form>             
           </div>
           :
           <h6 style={{textAlign:"center"}} >You must start the section to leave us your comment</h6>
          }

            
                        
            </div>
  
        
        </Section>

        
    )
}

const Section = styled.section`  
  
  .coment{        
      width: 100%;
     margin: 0 10px 0 0px;
     
  }

  .fas{
      font-size:15px;
      color:#ffffff;
      
     
  }

  .boton-envio{
      width:100px;
      heigth:30px;
      margin-left:350px;
     
  }

  .delete-edit{
    margin-left:600px;

  }

  

  .btn{
    width:40px;
    border-radius:50px;
  }  

  
  @media screen and (min-width: 280px) and (max-width: 720px) {

    .comentario- {
      font-size:80%;
      height:auto;
      border-radius:15px;
    }
    .coment{        
        width: 95%;
        margin-left:3px;

    }

    .btn{
      width:40px;
      border-radius:50px;
      text-align:center;
    }

    .delete-edit{
      font-size:5px;
      margin-left:190px;
    
      }

      .boton-envio{     
        margin-left:150px;
       
    }
    
  
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;



export default Coment;