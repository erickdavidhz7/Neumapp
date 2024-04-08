import express from 'express'
import cors from 'cors'
import https from 'node:https'
import http from 'node:http'
import fs from 'fs'
import { envs, sslPathOutsideRep } from './utils/constants'
import routes from './routes/router'
import { db } from './utils/database'
import { initModels } from './models/initModels'

//* ----------------Server configuration -----------------

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

db.authenticate()
  .then(() => {
    console.log('Database Authenticated')
  })
  .catch((err) => {
    console.log(err)
  })

db.sync()
  .then(() => {
    console.log('Database Synced')
  })
  .catch((err) => {
    console.log(err)
  })

initModels()

app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

//Llamo al router principal
app.use('/', routes)

https
  .createServer(
    {
      cert: fs.readFileSync(sslPathOutsideRep + '/fullchain.pem'),
      key: fs.readFileSync(sslPathOutsideRep + '/privkey.pem'),
    },
    app
  )
  .listen(envs.PORT, () => {
    // local testing
    // console.log(`Server is listening at https://localhost:${envs.PORT}/`)
    //For the deployment
    console.log(`Server is listening at https://neumapp.site:${envs.PORT}/`)
  })

http
  .createServer(app)
  .listen(8000, () => {
    console.log(`Server is listening at http://localhost:${8000}/`)
  })
