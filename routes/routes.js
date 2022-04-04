const Router = require("express").Router();

const passport = require("../config/passport")




const comentControllers = require("../controllers/comentsController");
const { cargarComentarios, obtenerComentarios, borrarComentario, editarComentario } = comentControllers;

const citiesController = require("../controllers/datosControllers")
const {ObtenerCiudades, ObtenerItynerarios, likeDislik} = citiesController // desestructuración del controlador de Ciudades

const usersControllers = require ("../controllers/usersControllers")
const{nuevoUsuario, verifyEmail, accesoUsuario, cerrarCesion, verificarToken} = usersControllers

const validator = require("../controllers/validator");


Router.route("/datos") // "datos" parte de la url de la consulta
.get(ObtenerCiudades)


Router.route("/itinerary") // "datos" parte de la url de la consulta
.get(ObtenerItynerarios)

Router.route("/signup")
.post( validator, nuevoUsuario)

Router.route("/verify/:uniqueText")
.get(verifyEmail)

Router.route("/signin")
.post(accesoUsuario)

Router.route("/signout")
.post(cerrarCesion)

Router.route("/coments")
.post(cargarComentarios)

Router.route("/coments/:id")
.get(obtenerComentarios)
.delete(borrarComentario)
.put(editarComentario)

Router.route("/signInToken")
.get(passport.authenticate("jwt", {session:false}), verificarToken)

Router.route("/likesDisLike/:id")
.put(passport.authenticate("jwt", {session:false}), likeDislik)


module.exports = Router