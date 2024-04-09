import dotenv from 'dotenv'
import { get } from 'env-var'
import path from 'node:path'
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

export const envs = {
  PORT: get('PORT').required().asPortNumber(),
  JWT_SECRET: get('JWT_SECRET').required().asString(),
  db: {
    DB_HOST: get('DB_HOST').required().asString(),
    DB_USER: get('DB_USER').required().asString(),
    DB_PASSWORD: get('DB_PASSWORD').required().asString(),
    DB_NAME: get('DB_NAME').required().asString(),
    DB_PORT: get('DB_PORT').required().asString(),
  },
}
