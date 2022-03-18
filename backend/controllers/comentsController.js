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
    },

    obtenerComentarios: async(req, res)=>{
        let id = req.params.id;
        
        let comentario      

        try {
            comentario = await Comments.find({itinerario:id}).populate("user")
            console.log(comentario)
            
        } catch (error) {
            console.log(error)           
        }
        res.json({success:true, response:{comentario}})//traemos esos datos , de los comentarios hechos por ese usuario 
    },

    borrarComentario: async(req, res) =>{
        let id = req.params.id;
        
        let comentario  
        try {
            comentario = await Comments.findOneAndDelete({_id:id})
            
        } catch (error) {
            console.log(error)           
        }
        res.json({success:true, response:{comentario}})
    },

    editarComentario: async(req, res) =>{
        console.log(req.body.data)
        let id = req.params.id; 
        let newComent = req.body.data
        
        let comentario  
        try {
            comentario = await Comments.findOneAndUpdate({_id:id}, { coment:newComent}, {new:true} )
            
        } catch (error) {
            console.log(error)           
        }
        res.json({success:true, response:{comentario}, mesagge:"Se ha modificado tu comentario"})
    }
}

module.exports = comentControllers;



