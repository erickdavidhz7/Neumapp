import { Sequelize } from 'sequelize';
import { envs } from './constants';

export const db = new Sequelize({
  dialect: 'postgres',
  host: envs.db.DB_HOST,
  username: envs.db.DB_USER,
  password: envs.db.DB_PASSWORD,
  database: envs.db.DB_NAME
})