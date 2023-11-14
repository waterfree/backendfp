//Data First
import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { QueryError } from "sequelize";

let tablas = initModels(conexion)

export async function getAttends(req, res) {

    try {
        let resultado = await tablas.attends.findAll();
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

export async function findoneAttend(req, res) {
    try {
        let resultado = await tablas.attends.findAll({
            where: { pet_id: req.params.id }
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

export async function postAttends(req, res) {
    try {
        let resultado = await tablas.attends.create(req.body);
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

export async function destroyAttends(req, res) {
    try {
        let resultado = await tablas.attends.destroy({
            where: { pet_id: req.params.id }
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
