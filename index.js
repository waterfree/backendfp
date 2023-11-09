import express from 'express';
import conexion from './database/database.js';
import router from './routes/routes.js';

async function iniciarServidor(){
    const app = express();

    try{
        await conexion.sync({force: false})
    }catch(err){
        console.error("Error al sincronizar: "+err)
        return;
    }

    app.use(express.json())
    //app.use(express.urlencoded({extended:false}))
    app.use(router)
    app.listen(3000)

    console.log("El servidor se esta ejecutando por el puerto 3000")
}

iniciarServidor()
