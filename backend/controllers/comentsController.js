const nodemailer = require("nodemailer");
const crypto =require("crypto");

const Comments = require("../models/coments.js")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");



const comentControllers={
    cargarComentarios: async (req, res) => {    
        let { itinerario, message, user } = req.body.dataComents // destructuring
        console.log(req.body.dataComents)

        new Comments({
            itinerario:itinerario,
            user:user,
            coment:message,
        }).save()  //guardamos los datos de acuerdo con el modelo establecido

        let comentario      

        try {
            comentario = await Comments.find({itinerario:itinerario}).populate("user")
            
        } catch (error) {
            console.log(error)
            
        }

        res.json({success:true, response:{comentario}})//traemos esos datos , de los comentarios hechos por ese usuario       
    }
}

module.exports = comentControllers;



