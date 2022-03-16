const nodemailer = require("nodemailer");
const crypto =require("crypto");
const User = require("../models/user.js");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const comentControllers={
    cargarComentarios: async (req, res) => {    
        let { itinerario, message, user } = req.body.dataComents // destructuring
    }
}

module.exports = comentControllers;



