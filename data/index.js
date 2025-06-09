import sequelize from "sequelize";

const sequelize = new sequelize("db_estudiantes", "root","root",{
    host: "localhost",
    dialect: "mysql",
    port: 3306, 
    logging: false,
} )

export default sequelize;