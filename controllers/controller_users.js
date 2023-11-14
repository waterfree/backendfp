import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { QueryError } from "sequelize";

let tablas = initModels(conexion)

export async function getUsers(req, res) {

    try {
        let resultado = await tablas.users.findAll();
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

export async function findoneUser(req, res) {
    try {
        let resultado = await tablas.users.findAll({
            where: { id_user: req.params.id }
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

export async function postUsers(req, res) {
    try {
        let resultado = await tablas.users.create(req.body);
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

export async function destroyUsers(req, res) {
    try {
        let resultado = await tablas.users.destroy({
            where: { id_user: req.params.id }
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