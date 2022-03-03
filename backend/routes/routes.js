const Router = require("express").Router();
const citiesController = require("../controllers/datosControllers")
const {ObtenerCiudades, ObtenerItynerarios} = citiesController // desestructuración del controlador de Ciudades
const usersControllers = require ("../controllers/usersControllers")
const{nuevoUsuario, verifyEmail} = usersControllers
const validator = require("../controllers/validator")

Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerCiudades)


Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)

Router.route("/signup")
.post( validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)


module.exports = Router