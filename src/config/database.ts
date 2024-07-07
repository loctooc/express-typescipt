import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_NAME || "localhost",
  process.env.DATABASE_USERNAME || "root",
  process.env.DATABASE_PASSWORD || '1111',
  {
    host: process.env.HOST || "localhost",
    dialect: "mysql",
  }
);

export default sequelize;
