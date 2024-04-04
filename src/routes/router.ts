//------ ESTE ES EL ROUTER PRINCPAL, LLAMA A LAS DISTINTAS RUTAS -------//
import express from "express"
require("dotenv").config();
const { Router } = require("express")
const mainRouter = Router()

//---- Importo las rutas de users ----/ (lo mismo para cada entidad que necesitemos)
const users = require('./users.routes.ts')

//-------------------------------------------//
//este es solo para que no se vea el mensaje de Canot GET (Luego hay que eliminarlo)//
mainRouter.get('/', (req: any, res: any)=> {
    res.status(200).json("Este es el router principal, Para acceder al router de users escriba '/users'")
})
//------------------------------------------//
//---- Llamo a las Rutas de cada Entidad ----//
mainRouter.use("/users", users)

//Aca van las distintas rutas para cada entidad

module.exports = mainRouter;