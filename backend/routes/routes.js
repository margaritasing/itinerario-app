const Router = require("express").Router();



const comentControllers = require("../controllers/comentsController");
const { cargarComentarios, obtenerComentarios, borrarComentario, editarComentario } = comentControllers;

const citiesController = require("../controllers/datosControllers")
const {ObtenerCiudades, ObtenerItynerarios} = citiesController // desestructuración del controlador de Ciudades

const usersControllers = require ("../controllers/usersControllers")
const{nuevoUsuario, verifyEmail, accesoUsuario, cerrarCesion} = usersControllers

const validator = require("../controllers/validator")

Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerCiudades)


Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)

Router.route("/signup")
.post( validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signIn")
.post(accesoUsuario)

Router.route("/signOut")
.post(cerrarCesion)

Router.route("/coments")
.post(cargarComentarios)

Router.route("/coments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(editarComentario)


module.exports = Router