import express from 'express'
import cors from 'cors'
import https from 'node:https'
import http from 'node:http'
import swaggerUi from 'swagger-ui-express'
import { corsOptions, envs, httpsOptions } from './utils/constants'
import routes from './routes/router'
import { initDb } from './utils/database'
import { initModels } from './models/initModels'
import openApiSpec from '../openapiDoc/openapi.json'

//* ----------------Server configuration -----------------
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: '50mb' }))
app.use(cors(corsOptions))

initDb()
initModels()

//Llamo al router principal
app.use('/', routes)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiSpec))

https.createServer(httpsOptions, app).listen(envs.PORT, () => {
  console.log(`Server is listening at https://${envs.APP_DOMAIN}:${envs.PORT}/`)
})
/*
http.createServer(app).listen(8000, () => {
  console.log(`Server is listening at http://${envs.APP_DOMAIN}:${8000}/`)
})
*/