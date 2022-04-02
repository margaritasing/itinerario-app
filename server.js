require("dotenv").config()

const express = require("express")  //equivalente al import de Reac, pero en Node
const cors = require("cors")
const Router = require("./routes/routes")
const passport = require("passport")
const { path } = require("express/lib/application")
const app = express()
require("./config/database")
require("./config/passport")
const path = require('path')
const PORT=process.env.PORT || 4000
const HOST=process.env.HOST || '0.0.0.0'

/* Middlewares: Son software o servicio intermedio que utiliza la app, para hacer determinadas funciones */

app.use(express.json()) //tramo intermedio que pasa los datos a una variable
app.use(cors())
app.use(passport.initialize())
app.use("/api",Router)

if (procces.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname+'/cliente/build/index.html'))

    })
    
}

app.listen(PORT, HOST, ()=> console.log("Servidor Inicializado en Puerto 4000"))