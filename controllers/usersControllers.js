const nodemailer = require("nodemailer");
const crypto =require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");
 
async function sendEmail(email, uniqueText){

    const transporter=nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:465,
        secure:true,
        auth:{

            user:"myitinerary1116@gmail.com",
            pass:process.env.NODEMAILER,
        }

    })

    const sender="myitinerary1116@gmail.com"
    const mailOptions={
        from:sender,
        to:email,
        subject:"My Tinerary User Email verification",
        html:`<div style="margin: 20px; padding: 30px; background:#cf9bec; border:4px solid #a719ca;">
        <h1 style="color:#a719ca; font-family:Oswald ; font-size: 80px; text-align: center;">My Tinerary </h1>
        </br>
        <h2 style="color:#000000; font-style: 20px; text-align:center;"> Click <a 
        style ="color:#6309f3; font-style:"Oswald"     
        href=https://itinerarioapp.herokuapp.com/api/verify/${uniqueText}> Here </a>To validate your email </h2>
        </br>
        </br>
        <h6 style="color: #a03a9e; font-size: 12px;text-align: center;">All Rights Reserved Copyright - 2022</h6>
        <h6 style="color: #a03a9e; font-size: 12px;text-align: center;"><i>powered by Apfel-Urban</i> </h6>
        </div>`
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

    verifyEmail: async (req, res) => { //es el controlador que recibe el click del usuario en el email
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("https://itinerarioapp.herokuapp.com/signin")
        }
        else {
            res.json({ success: false, response: "Your e-mail could not be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { imageUser, firstname, lastname, email, password, from } = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
              
                /* Facebook start if */
                if(from !== "SignUp"){
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    usuarioExiste.imageUser=imageUser;
                    usuarioExiste.password= passwordHash;
                    usuarioExiste.emailVerificado= true;
                    usuarioExiste.from= from;
                    usuarioExiste.connected= false; 

                    usuarioExiste.save();
                    res.json({success:true, response:"I update the singin, now you can do it with"+ from})        
                }else{
                    res.json({success:false, response:"The username is already in use"})
                }
                 /* Facebook end if */

                  /* Google start if */                     
             
               /*   if(google){                
                    const passwordHash = bcryptjs.hashSync(password, 10)
                    usuarioExiste.password= passwordHash;
                    usuarioExiste.emailVerificado= true;
                    usuarioExiste.google= true;
                    usuarioExiste.connected= false;

                    usuarioExiste.save();
                    res.json({success:true, from:"google", response:"Actualizo el singin, ahora lo puedes hacer con google"})                   
                    
                }else{
                    res.json({success:false, from:"SignUp", response:"Este email ya esta en uso, por favor realiza singIN"})                   

                }*/
                 /*google end if */
                

             } /* final de if de usuario existe */
             
             else { /* start else del if de usuario existe */
                const emailVerificado = false
                const uniqueText = crypto.randomBytes(15).toString("hex") //texto randon de 15 caracteres hexadecimal                
                const passwordHash = bcryptjs.hashSync(password, 10)

                const newUser = new User({
                    imageUser,
                    firstname,
                    lastname,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerificado,
                    connected:false,
                    from,
                })
                console.log(newUser.imageUser)

                 /* Facebook start else */

                if (from !== "SignUp") {
                    newUser.emailVerificado=true;
                    newUser.from= from;
                    newUser.connected=false;
                    
                    await newUser.save()

                    res.json({success:true,data:{newUser},response:"Congratulations we have created your user with"+"" +from})
                }else{
                    newUser.emailVerificado=false;
                    newUser.from= from;
                    newUser.connected= false;

                    await newUser.save();
                    await sendEmail(email, uniqueText);

                    res.json({ success:true, response: "We have sent an e-mail to verify your e-mail address" , data:{newUser}})

                }

                /* Facebook end else */

                /* Google start else */
              /*  if(google){
                    newUser.emailVerificado= true;
                    newUser.google=true,
                    newUser.connected= false,

                    await newUser.save()

                    res.json({success:true,from:"google", response:"Felicitaciones hemos creado tu usuario con google",data:{newUser}})
                }


                else {
                    newUser.emailVerificado=false
                    newUser.google= false
                    newUser.connected= false
                    await newUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success:true, from:"SingUp", response: "We have sent an e-mail to verify your e-mail address" , data:{newUser}})
                } *//* google end else */
            }/* final del else de usuario existe */
        }/* final de try */
        catch (error) { res.json({ success: "falseVAL",from:"SingUp",  response:"The mail is already in use", error: error }) }
    },

    accesoUsuario: async (req, res) => {

        const { email, password } = req.body.userData

        try {
            const usuario = await User.findOne({ email })

            if (!usuario) {
                res.json({ success: false, from: "controller", error: "The username and/or password is incorrect" })
            }
            else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)

                    if (passwordCoincide) {
                        
                        const datosUser = {
                            imageUser:usuario.imageUser,
                            firstname: usuario.firstname,
                            lastname: usuario.lastname,
                            email: usuario.email,
                            id:usuario._id
                        }
                        usuario.connected=true
                        await usuario.save()
                        const token = jwt.sign({...datosUser }, process.env.SECRETKEY, {expiresIn:60*60*24})

                        res.json({ success: true, from: "controller", response: { token, datosUser } }) // "logueado" })
                    }
                    else { res.json({ success: false, from: "controller", error: "The username and/or password is incorrect" }) }
                }
                else { res.json({ success: false, from: "controller", error: "Verify your e-mail to validate yourself" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }

    },

    cerrarCesion: async (req,res) => {

        const email = req.body.email
        console.log(req.body.email)

        const user = await User.findOne({email})

       /*  user.connected=false */

        await user.save()
        res.json({success:true, response:"Closed assignment"})

    },

    verificarToken: async(req, res)=>{
        if(!req.error){
            res.json({success:true, 
                datosUser:{   
                    imageUser:req.user.imageUser,           
                    firstname:req.user.firstname, 
                    lastname:req.user.lastname,
                    email:req.user.email,
                    id:req.user.id}, 
                    response:"Welcome Back Again" + req.user.firstname })
        }else{
            res.json({success:false, response:"Please again SingIn"})
        }
    }

};


module.exports = usersControllers
