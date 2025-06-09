import { DataTypes } from "sequelize";
import { sequelize } from "../data/index.js";

const Career = sequelize.define("career", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Career;