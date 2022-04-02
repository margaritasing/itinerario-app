import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useStateValue } from "../reducer/StateProvider";
import axios from 'axios';



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
        console.log(dataComents)
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
            setReload(!reload)
        }
        
        const handleChange = (event) =>{
            setCambio(event.currentTarget.textContent)
            
        }
        
        const editar = async(id) =>{
            let data=cambio           
          await  axios.put(`https://itinerarioapp.herokuapp.com/api/coments/${id}`,{data})
            .then(response => console.log(response))
            setReload(!reload)
        }      
     
      
     
        
    return(

        <Section>

        <div className="coment">

        {comment?.map(item =>
            
             <div key={item._id}>
             <img src={item.user.imageUser} style={{width:"50px",
              height:"50px",
              marginLeft:"25px",
              borderRadius:"50%"
            }} alt=".." />
             <p>{item.user.firstname}</p>
             {item.user._id === user?.datosUser.id ?
              <div>

                <div>              
                     <div style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"5px", width:"100%", height:"40px", padding:"8px"}}  onInput={handleChange} contentEditable suppressContentEditableWarning
                     >{item.coment}</div>             
                </div>
                <div className="delete-edit">
                    <button type="button" className="btn btn-danger my-2 mx-1 offset-10" onClick={()=> borrarComentarios(item._id)} ><i className="fas fa-trash-alt"></i></button>  
                    <button type="button" className="btn btn-warning mx-3 offset-10" onClick={()=> editar(item._id)}><i className="fas fa-edit"></i></button>                
                </div>           
            </div>
            :
            <div>
                <div style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"5px", width:"100%", height:"40px", padding:"8px"}}>{item.coment}</div>             
             </div>
        }
            </div>
            )}
             
          {user?
           <div className="formulario">
                <form onSubmit={submitComent}>        
                    
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label"></label>
                    <input type="text"  className="form-control w-100" placeholder="Write us" />
                </div>                    
                   <div className="boton-envio">
                   <button type="submit" className="btn btn-primary"><i className="fas fa-paper-plane" /></button>                    
                   </div>      
                </form>             
           </div>
           :
           <h6 style={{textAlign:"center"}} >Debes Iniciar seccion para dejarnos tu comentario</h6>
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
      margin-top:10px;
  }

  .boton-envio{
      width:130px;
      heigth:30px;
      margin-left:350px;
     
  }

  .delete-edit{
    margin-left:600px;

  }

  .fa-paper-plane{
      width:50px;
      
  }





 

  

  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .coment{        
        width: 95%;
        margin-left:3px;

    }
    
  
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;



export default Coment;