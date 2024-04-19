import { Sequelize } from 'sequelize'
import { envs } from './constants'

export const db = new Sequelize({
  dialect: 'postgres',
  host: envs.db.DB_HOST,
  username: envs.db.DB_USER,
  password: envs.db.DB_PASSWORD,
  database: envs.db.DB_NAME,
  logging: false,
})

export const initDb = () => {
  db.authenticate()
    .then(() => {
      console.log('Database Authenticated')
    })
    .catch((err) => {
      console.log(err)
    })

  db.sync({ alter: true })
    .then(() => {
      console.log('Database Synced')
    })
    .catch((err) => {
      console.log(err)
    })
}
