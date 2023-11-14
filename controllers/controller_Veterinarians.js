import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { QueryError } from "sequelize";

let tablas = initModels(conexion)


export async function getVeterinarians(req, res) {

    try {
        let resultado = await tablas.veterinarians.findAll();
        res.status(200).json(resultado)
    } catch (error) {
        // Crear un objeto JSON con detalles del error
        const errorResponse = {
            error: true,
            message: "Error al obtener los usuarios",
            details: error.message, // Puedes incluir más detalles del error si es necesario
        };
        res.status(500).json(errorResponse);

        // También puedes registrar el error en la consola
        console.error(error);
    }
}

export async function findoneVeterinarians(req, res) {
    try {
        let resultado = await tablas.veterinarians.findAll({
            where: { veterinarian_id: req.params.id }
        });
        res.status(200).json(resultado)
    } catch (error) {
        // Crear un objeto JSON con detalles del error
        const errorResponse = {
            error: true,
            message: "Error al obtener los usuarios",
            details: error.message, // Puedes incluir más detalles del error si es necesario
        };
        res.status(500).json(errorResponse);

        // También puedes registrar el error en la consola
        console.error(error);
    }
}

export async function postVeterinarians(req, res) {
    try {
        let resultado = await tablas.veterinarians.create(req.body);
        res.status(200).json(resultado)
    } catch (error) {
        // Crear un objeto JSON con detalles del error
        const errorResponse = {
            error: true,
            message: "Error al obtener los usuarios",
            details: error.message, // Puedes incluir más detalles del error si es necesario
        };
        res.status(500).json(errorResponse);

        // También puedes registrar el error en la consola
        console.error(error);
    }
}

export async function destroyVeterinarians(req, res) {
    try {
        let resultado = await tablas.veterinarians.destroy({
            where: { veterinarian_id: req.params.id }
        });
        res.status(200).json(resultado)
    } catch (error) {
        // Crear un objeto JSON con detalles del error
        const errorResponse = {
            error: true,
            message: "Error al obtener los usuarios",
            details: error.message, // Puedes incluir más detalles del error si es necesario
        };
        res.status(500).json(errorResponse);

        // También puedes registrar el error en la consola
        console.error(error);
    }
}