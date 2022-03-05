const nodemailer = require("nodemailer");
const crypto =require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
//const { response } = require("express")
const jwt = require("jsonwebtoken");

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

    verifyEmail: async (req, res) => { //es el controlador que recibe el click del usuario en el email
        const { uniqueText } = req.params
        const user = await User.findOne({ uniqueText: uniqueText })
        if (user) {
            user.emailVerificado = true
            await user.save()
            res.redirect("http://localhost:3000/signin")
        }
        else {
            res.json({ success: false, response: "Your e-mail could not be verified" })
        }
    },

    nuevoUsuario: async (req, res) => {

        const { firstName, lastName, email, password } = req.body.NuevoUsuario // destructuring

        try {

            const usuarioExiste = await User.findOne({ email })
            console.log(req.body)
            if (usuarioExiste) {
                res.json({ success: "falseUE", response: "The user already exists, perform SignIn" })
            }

            else {
                const uniqueText = crypto.randomBytes(15).toString("hex") //texto randon de 15 caracteres hexadecimal
                const emailVerificado = false
                const passwordHash = bcryptjs.hashSync(password, 10)
                const NewUser = new User({
                    firstName,
                    lastName,
                    email,
                    password: passwordHash,
                    uniqueText, //busca la coincidencia del texto
                    emailVerificado,
                    connected:false,
                })

                if (!emailVerificado) {
                    await NewUser.save()
                    await sendEmail(email, uniqueText)
                    res.json({ success: "trueUE", response: "We have sent an e-mail to verify your e-mail address" })
                }
            }
        }

        catch (error) { res.json({ success: "falseUE", response: null, error: error }) }
    },

    accesoUsuario: async (req, res) => {

        const { email, password } = req.body.userData

        try {
            const usuario = await User.findOne({ email })

            if (!usuario) {
                res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" })
            }
            else {
                if (usuario.emailVerificado) {
                    let passwordCoincide = bcryptjs.compareSync(password, usuario.password)

                    if (passwordCoincide) {
                        const token = jwt.sign({ ...usuario }, process.env.SECRETKEY)
                        const datosUser = {
                            firstName: usuario.firstName,
                            lastName: usuario.lastName,
                            email: usuario.email,
                        }
                        usuario.connected=true
                        await usuario.save()
                        res.json({ success: true, from: "controller", response: { token, datosUser } }) // "logueado" })
                    }
                    else { res.json({ success: false, from: "controller", error: "el usuario y/o contraseña es incorrecto" }) }
                }
                else { res.json({ success: false, from: "controller", error: "verifica tu e-mail para validarte" }) }
            }
        }
        catch (error) { console.log(error); res.json({ success: false, response: null, error: error }) }

    },

    cerrarCesion: async (req,res) => {

        const email = req.body.email
        console.log(req.body.email)

        const user = await User.findOne({email})

        user.connected=false

        await user.save()
        res.json({success:true, response:"cesión cerrada"})

    }
}




module.exports = usersControllers