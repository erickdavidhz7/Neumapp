import fs from 'fs'
import dotenv from 'dotenv'
import { get } from 'env-var'
import path from 'node:path'
import { CorsOptions } from 'cors'
import { ServerOptions } from 'node:https'
dotenv.config()

// export const port: string | undefined = process.env.PORT

// It will go back 3 folder levels from this file's directory in order to reach ssl's folder path that is supposed to be outside of the project's directory
export const sslPathOutsideRep: string | undefined = path.join(
  __dirname,
  '..',
  '..',
  '..',
  '/ssl'
)

export const httpsOptions: ServerOptions = {
  cert: fs.readFileSync(sslPathOutsideRep + '/fullchain.pem'),
  key: fs.readFileSync(sslPathOutsideRep + '/privkey.pem'),
}

export const corsOptions: CorsOptions = {
  origin: '*',
  credentials: true,
  allowedHeaders: ['Origin, X-Requested-With, Content-Type, Accept'],
  methods: ['GET, POST, OPTIONS, PUT, DELETE'],
}

export const envs = {
  APP_DOMAIN: get('APP_DOMAIN').default('localhost').asString(),
  PORT: get('PORT').required().asPortNumber(),
  jwt: {
    JWT_SECRET: get('JWT_SECRET').required().asString(),
    JWT_EXPIRATION: get('JWT_EXPIRATION').default('24h').asString(),
    JWT_ISSUER: get('JWT_ISSUER').required().asString(),
  },
  db: {
    DB_HOST: get('DB_HOST').required().asString(),
    DB_USER: get('DB_USER').required().asString(),
    DB_PASSWORD: get('DB_PASSWORD').required().asString(),
    DB_NAME: get('DB_NAME').required().asString(),
    DB_PORT: get('DB_PORT').required().asString(),
  },
}
