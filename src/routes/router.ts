//------ ESTE ES EL ROUTER PRINCPAL, LLAMA A LAS DISTINTAS RUTAS -------//
import express, { Request, Response } from 'express'
//---- Importo las rutas de users ----/ (lo mismo para cada entidad que necesitemos)
import usersRoutes from './users.routes'
import reviewsRoutes from './reviews.routes'
import authRoutes from './auth.routes'
import providersRoutes from './providers.routes'

const mainRouter = express.Router()
//-------------------------------------------//
//este es solo para que no se vea el mensaje de Canot GET (Luego hay que eliminarlo)//
mainRouter.get('/', (_req: Request, res: Response) => {
  res.status(200).send(`
       <h1>Welcome to Neuma's backend server</h1>
       <h2>Code: 200</h2>
       <p>Good request</p>
       <p>Using HTTPS</p>
       <P>Architecture Defined</p>
      `)
})
//------------------------------------------//
//---- Llamo a las Rutas de cada Entidad ----//
mainRouter.use('/auth', authRoutes)
mainRouter.use('/users', usersRoutes)
mainRouter.use('/reviews', reviewsRoutes)
mainRouter.use('/providers', providersRoutes)

//Aca van las distintas rutas para cada entidad

export default mainRouter
