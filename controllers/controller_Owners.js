//Data First
import initModels from "../models/init-models.js"
import conexion from "../database/database.js"
import { QueryError } from "sequelize";

let tablas = initModels(conexion)

export function bienvenida(req, res) {
    res.status(200).json({ msg: "Bienvenido Usuario" })
}

export async function getOwners(req, res) {

    try {
        let resultado = await tablas.owners.findAll();
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

export async function findoneOwner(req, res) {
    try {
        let resultado = await tablas.owners.findAll({
            where: { owner_id: req.params.id }
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

export async function postOwners(req, res) {
    try {
        let resultado = await tablas.owners.create(req.body);
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

export async function destroyOwners(req, res) {
    try {
        let resultado = await tablas.owners.destroy({
            where: { owner_id: req.params.id }
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