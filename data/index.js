import sequelize from "sequelize";

const sequelize = new sequelize(DATABASE, DBUSER,{
    host: DBHOST,
    dialect: "mysql",
    port: DBPORT, 
    logging: false,
} )

export default sequelize;