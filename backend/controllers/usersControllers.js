const nodemailer = require("nodemailer")
const crypto =require("crypto")
const User = require("../models/user.js")
const bcryptjs = require("bcryptjs")
const { response } = require("express")

async function sendEmail(email, uniqueText){

    const transporter=nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{

            user:"kaira.mytinerary@gmail.com",
            pass:"prueba1234"
        }

    })

    const sender="kaira.mytinerary@gmail.com"
    const mailOptions={
        from:sender,
        to:email,
        subject:"Verificacion de usuario",
        html:`Presiona <a href=http://localhost:4000/api/verify/${uniqueText}>Aqui</a>Para validar tu email`
    }
   await transporter.sendMail(mailOptions, function(error,response){
       if (error) {
           console.log(error)
       }else{
           console.log("mensaje enviado")//parametros que se envian al usuario
       }
   })
}


const usersControllers = {

    verifyEmail: async (req, res)=>{//controlador que recibe el clip del email, y busca el usuario en la base(emailverificado, lo pasa de false a true)
     const{uniqueText}=req.params// toma el parametro de la clave
     const user= await User.findOne({uniqueText:uniqueText})
     if (user) {
         user.emailVerificado= true
         await user.save()
         res.redirect("http://localhost:3000/signin")
     }else{
         res.json({success:false, response:"It has not been possible to verfy your email"})
     }
    },
    nuevoUsuario: async (req,res) => {

    const {firstname, lastname, email, password}=req.body.NuevoUsuario
        console.log(req.body)
        try {
            const UsuarioExiste = await User.findOne({email})

            if (UsuarioExiste){
                res.json({success:"falseUE", response:"User already exists, login"})
            }
            else{
                
                const uniqueText= crypto.randomBytes(15).toString("hex")// genera un texto de 15 caracteres hexagecimal
                const emailVerificado=false
                const passwordHash = bcryptjs.hashSync(password,10)
                const NewUser = new User({
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText,//busca la coincidencia del texto, no se pasa nunca password
                    emailVerificado,

                })
                if (!emailVerificado) {
                    await NewUser.save()
                    await sendEmail(email, uniqueText)// esperamos que se cree el usuario nuevo
                    res.json({success:"trueUE",response:"An email has been sent to verify your email"})
                }
               
               
            }
           
        }
catch(error){res.json({success:"falseUE",response:null,error:error})
        }
    }
}
module.exports = usersControllers