import sequelize from "../data/index.js";
import { DataTypes } from "sequelize";


const Students = sequelize.define("students", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,p
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
})
