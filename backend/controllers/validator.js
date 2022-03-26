const joi = require("joi")
const { nuevoUsuario } = require("./usersControllers")

const validator = (req,res,next)=>{ 
    console.log(req.body.NuevoUsuario) 
const Schema=joi.object({
    imageUser:joi.string().required(),
    
    firstname:joi.string().max(40).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

        "string.min":"Nombre debe contener minimo 3 caracteres",
        "string.empty":"El campo no puede estar vacio"
    }),
    lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

        "string.min":"Apellido debe contener minimo 3 caracteres",
        "string.empty":"El campo no puede estar vacio"
    }),
    email:joi.string().email({minDomainSegments:2}).required().messages({
        "string.email":"Formato de correo no valido"
    }),
    password:joi.string().max(30).min(6).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
        "string.pattern.base":"La contraseña debe contener minimo una mayuscula, una minuscula y un numero",
        "string.min":"La contraseña debe contener minimo 6 caracteres alfanumericos",
        "string.max":"La contraseña no debe exceder de 30 caracteres alfanumericos"
    }),  
   /*  google:joi.boolean(), */
    from: joi.string()



})
const validation = Schema.validate(req.body.NuevoUsuario,{abortEarly:false})

if(validation.error){
    return res.json({success:"falseVAL", response:validation})  
}
next()
}
module.exports = validator
