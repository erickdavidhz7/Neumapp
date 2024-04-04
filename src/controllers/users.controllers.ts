//IMPORTO LOS SERVICIOS DE USUARIOS//
import userServices from '../services/users.services'
import { Request, Response } from 'express'

const UsersControllers = {
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await userServices.getAllUsers()
      res.status(200).send(users)
    } catch (error) {
      res.status(500).send('Internal Serve Error')
    }
  },
  //Aca Se deben agregar el resto de los controladores de usuarios
}
export default UsersControllers
