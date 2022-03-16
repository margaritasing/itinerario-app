const nodemailer = require("nodemailer");
const crypto =require("crypto");

const Comments = require("../models/coments.js")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");



const comentControllers={
    cargarComentarios: async (req, res) => {    
        let { itinerario, coment, user } = req.body.dataComents // destructuring
        console.log(req.body.dataComents)

        new Comments({
            itinerario:itinerario,
            user:user,
            coment:message,
        }).save()
        .then(response => res.json({response})) //guardamos los datos de acuerdo con el modelo establecido

       
    }
}

module.exports = comentControllers;



