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
        await axios.post("http://localhost:4000/api/coments",{dataComents})
        .then(response => 
            setComment(response.data.response.comentario))
            setReload(!reload)
        }

    
        
        
        useEffect(() => {
            let id= props.itinerary
           
      
          axios.get(`http://localhost:4000/api/coments/${id}`)
            .then(response =>{
                setComment(response.data.response.comentario)
                
            })        
            
            
        }, [reload])//quito el reload y se ven los comentarios
        
        const borrarComentarios =async(id) =>{
            
          await  axios.delete(`http://localhost:4000/api/coments/${id}`)
            setReload(!reload)
        }
        
        const handleChange = (event) =>{
            setCambio(event.currentTarget.textContent)
            
        }
        
        const editar = async(id) =>{
            let data=cambio           
          await  axios.put(`http://localhost:4000/api/coments/${id}`,{data})
            .then(response => console.log(response))
            setReload(!reload)
        }      
     
      
     
        
    return(

        <Section>

        <div className="coment">

        {comment?.map(item =>
             <div key={item._id}>
             <p>{item.user.firstname}</p>
             {item.user._id === user?.datosUser.id ?
              <div>

                <div>
              
                     <div style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"5px", width:"100%"}}  onInput={handleChange} contentEditable suppressContentEditableWarning
                     >{item.coment}</div>             
                </div>

            <button type="button" className="btn btn-danger my-2 mx-1" onClick={()=> borrarComentarios(item._id)} >Delete</button>  
            <button type="button" className="btn btn-warning mx-3" onClick={()=> editar(item._id)}>Editar</button>             
            
            </div>
            :
            <div>
                <div style={{border:"0",backgroundColor:"#F3E9DD", borderRadius:"5px", width:"100%"}}>{item.coment}</div>             
             </div>

        }
            </div>
            )}
             
          {user?
           <div className="formulario">
                <form onSubmit={submitComent}>        
                    
                <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label"></label>
                    <input type="text"  className="form-control w-100" placeholder="Coments" />
                </div>                    
                    <button type="submit" className="btn btn-primary">Submit</button>       
                </form>             
           </div>
           :
           <h1>Debes Iniciar seccion para dejarnos tu comentario</h1>
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
      font-size:30px;
      color:#9AD0EC;
      margin-top:10px;
  }

  button{
      margin-left:80px;

  }

  

  
  @media screen and (min-width: 280px) and (max-width: 720px) {
    .coment{        
        width: 95%;
        margin-left:3px;

    }
    button{
        margin-left:120px;
  
    }
  
    
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .cardinfo{
        margin-left: 0;
    }
   
  }
`;



export default Coment;