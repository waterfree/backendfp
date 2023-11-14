import express from 'express';
import conexion from './database/database.js';
import router from './routes/routes.js';
import cors from 'cors';

//const express = require('express');
//const cors = require('cors');

async function iniciarServidor(){
    const app = express();

    try{
        await conexion.sync({force: false})
    }catch(err){
        console.error("Error al sincronizar: "+err)
        return;
    }

    app.use(cors());
    app.use(express.json())
    //app.use(express.urlencoded({extended:false}))
    app.use(router)
    app.listen(3000)

    console.log("El servidor se esta ejecutando por el puerto 3000")
}

iniciarServidor()
