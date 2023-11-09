import { Sequelize } from "sequelize";

const conexion = new Sequelize(
    'veterinaria',
    'nestor',
    '1234',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
);

export default conexion;