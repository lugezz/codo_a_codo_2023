import { Sequelize } from "sequelize";

const db = new Sequelize(
    "social_media_23307",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: false
    }
);

export default db;