//IMPORTO LOS SERVICIOS DE USUARIOS//
import userServices from '../services/users.services'
import providerServices from '../services/providers.services'
import { Request, Response } from 'express'
import {v2 as cloudinary} from 'cloudinary'
import { signToken } from '../utils/jwt.util'
import { FileI } from '../interfaces/file.interface'
import { envs } from '../utils/constants'
import { ok } from 'assert'

cloudinary.config({cloudinary: envs.CLOUDINARY_URL})

const UsersControllers = {
  registerClient: async (req: Request, res: Response) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo,
      } = req.body

      if (!firstName || !lastName || !email || !password || !phoneClient) {
        return res.status(400).json({ ok: false, message: 'Missing User Data' })
      }

      const user = await userServices.createUsers({
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo: 'https://res.cloudinary.com/dnautzk6f/image/upload/v1712867008/Neumapp/neumapp-users_uadggc.png',
      })

      return res.status(201).json({
        firstName, 
        lastName, 
        email, 
        phoneClient, 
        photo,
        token: signToken({
          email: user.dataValues.email,
          id: user.dataValues.id,
        })
      })

      //TOdO: Caso cuando se suba foto

    } catch (error) {
      res.status(500).json('Internal Server Error')
    }
  },
  registerProvider: async (req: Request, res: Response) => {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo,
        phoneProvider,
        location,
      } = req.body

      if (!req.files || !req.files.photo) {
        return res.status(400).json({ ok: false, message: 'No photo file provided' })
      }

      const photoFile = req.files.photo as FileI

      const fileTypes = ["image/jpg", "image/png", "image/jpeg"];
      const fileExtensions = ["jpg", "png", "jpeg"];
      const fileSize = 10000000;
      
      if (!firstName || !lastName || !email || !password || !phoneClient || !phoneProvider || !location) {
        return res.status(400).json({ ok: false, message: 'Missing User Data' })
      }

      if (!fileTypes.includes(photoFile.mimetype)) {
        return res.status(400).json({ ok: false, message: 'File types: png, jpeg and jpg' })
      }

      if (!fileExtensions.includes(photoFile.name.split('.')[1])) {
        return res
          .status(400)
          .json({ message: 'File extensions: png, jpeg and jpg' })
      }

      if (photoFile.size > fileSize) {
        return res.status(400).json({ ok: false, message: 'File size: 10Mb' })
      }

      const uploadedPhoto = await cloudinary.uploader.upload(
        photoFile.tempFilePath,
        {
          folder: 'Neumapp/providers',
          use_filename: true,
          unique_filename: false
        }
      )

      const photoUrl = uploadedPhoto.secure_url
      console.log("photoURL: ", photoUrl)
      const user: any = await userServices.createUsers({
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo: photoUrl,
      })

      const provider = {
        phoneProvider: phoneProvider,
        location: location,
        UserId: user.id,
      }
  
      await providerServices.createProvider(provider)

      return res.status(201).json({
        firstName, 
        lastName, 
        email,  
        photo: photoUrl,
        phoneProvider,
        token: signToken({
          email: user.dataValues.email,
          id: user.dataValues.id,
        })
      })
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const users = await userServices.getAllUsers()
      res.status(200).send(users)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getUserByEmail: async (req: Request, res: Response) => {
    try {
      const { email } = req.params

      if (!email) {
        return res.status(404).json({ ok: false, message: 'Data not found' })
      }

      const userEmail = await userServices.findUserByEmail(email)

      return res.status(200).json(userEmail)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  },
  getUserById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(404).json({ ok: false, message: 'Data not found' })
      }

      const userId = await userServices.findUserById(id)

      return res.status(200).json(userId)
    } catch (error) {
      res.status(500).json({ ok: false, message: 'Internal server error' })
    }
  }
}
export default UsersControllers
