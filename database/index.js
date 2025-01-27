import { Sequelize } from "sequelize";
import 'dotenv/config';

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(process.env.DB, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    logging: console.log,
});

