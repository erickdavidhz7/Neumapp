import { promises } from 'fs'
import { Providers } from '../models/provider.model'
import { ProviderServices } from '../models/provider_services.model'
import { Users } from '../models/user.model'
import { hashPassword } from '../utils/crypto'
import { envs } from '../utils/constants'
import { UploadedFile } from 'express-fileupload'

export const seedsService = {
  usersProviders: async (jsonUsers: UploadedFile, jsonProviders: UploadedFile) => {
    try {
      if (!jsonUsers || !jsonProviders) {
        throw { status: 400, msg: 'No se ha subido ningún archivo.' }
      }

      if (
        jsonUsers.mimetype !== 'application/json' ||
        jsonProviders.mimetype !== 'application/json'
      ) {
        throw { status: 400, msg: 'El archivo debe ser de tipo JSON.' }
      }

      const tempUsersPath = `./tmp/${jsonUsers.name}`
      await jsonUsers.mv(tempUsersPath)

      const data = await promises.readFile(tempUsersPath, 'utf8')
      const usersData = JSON.parse(data)

      const user = await Users.findByPk(usersData[0].id)
      if (user) {
        throw { status: 400, msg: 'Already created data' }
      }

      await promises.unlink(tempUsersPath)

      const tempProvPath = `./tmp/${jsonProviders.name}`
      await jsonProviders.mv(tempProvPath)

      const dataProvs = await promises.readFile(tempProvPath, 'utf8')
      const provsData = JSON.parse(dataProvs)

      const completeUsersData  = usersData.map((el:any) => {
        return {
          id: el.id,
          firstName: el.firstName,
          lastName: el.lastName,
          email: el.email,
          phoneClient: el.phoneClient,
          password: hashPassword('123456'),
          photo: envs.DFLT_USR_PHOTO_URL,
        }
      })

      await promises.unlink(tempProvPath)
      
      await Users.bulkCreate(completeUsersData)
      await Providers.bulkCreate(provsData)
      await ProviderServices.bulkCreate(provsData)
    } catch (error) {
      throw error
    }
  },
}
