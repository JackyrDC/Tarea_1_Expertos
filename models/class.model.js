import { DataTypes } from "sequelize";
import { sequelize } from "../data/index.js";
import Career from "./career.model.js";

const Class = sequelize.define("class", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    code: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
})

Class.belongsTo(Career, { foreignKey: "career_id" });

export default Class;