const joi = require("joi")
const { nuevoUsuario } = require("./usersControllers")

const validator = (req,res,next)=>{ 
    console.log(req.body.NuevoUsuario) 
const Schema=joi.object({
    imageUser:joi.string().required(),
    
    firstname:joi.string().max(40).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

        "string.min":"Name must contain at least 3 characters",
        "string.empty":"The field cannot be empty"
    }),
    lastname:joi.string().max(20).min(3).trim().pattern(new RegExp("[a-zA-Z]")).required().messages({

        "string.min":"Last name must contain at least 3 characters",
        "string.empty":"The field cannot be empty"
    }),
    email:joi.string().email({minDomainSegments:2}).required().messages({
        "string.email":"Invalid email format"
    }),
    password:joi.string().max(30).min(6).pattern(/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/).required().messages({
        "string.pattern.base":"The password must contain at least one uppercase, one lowercase and one number.",
        "string.min":"The password must contain at least 6 alphanumeric characters",
        "string.max":"The password must not exceed 30 alphanumeric characters"
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
