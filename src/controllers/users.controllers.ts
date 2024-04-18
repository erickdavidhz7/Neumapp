//IMPORTO LOS SERVICIOS DE USUARIOS//
import userServices from '../services/users.services'
import providerServices from '../services/providers.services'
import { Request, Response } from 'express'
import { v2 as cloudinary } from 'cloudinary'
import { signToken } from '../utils/jwt.util'
import { FileI } from '../interfaces/file.interface'
import { envs } from '../utils/constants'
import { getCloudinaryResizedImage } from '../utils/cloudinary'

cloudinary.config({ cloudinary: envs.CLOUDINARY_URL })
export const defaultPhotoUrl = envs.DFLT_USR_PHOTO_URL

const uploadPhoto = async (photoFile: FileI) => {
  return await cloudinary.uploader.upload(photoFile.tempFilePath, {
    folder: 'Neumapp/providers',
    use_filename: true,
    unique_filename: false,
  })
}

const UsersControllers = {
  registerClient: async (req: Request, res: Response) => {
    try {
      const { firstName, lastName, email, password, phoneClient, photo } =
        req.body

      if (!firstName || !lastName || !email || !password || !phoneClient) {
        return res.status(400).json({ ok: false, message: 'Missing User Data' })
      }

      const newUser = {
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo: defaultPhotoUrl,
      }

      if (req.files?.photo) {
        const uploadedFile = await uploadPhoto(req.files?.photo as FileI)
        newUser.photo = uploadedFile.secure_url
      }

      const user = await userServices.createUsers(newUser)

      return res.status(201).json({
        firstName,
        lastName,
        email,
        photo:
          user.dataValues.photo !== defaultPhotoUrl
            ? getCloudinaryResizedImage(user.dataValues.photo, 100)
            : defaultPhotoUrl,
        isProv: false,
        token: signToken({
          email: user.dataValues.email,
          id: user.dataValues.id,
        }),
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json('Internal Server Error')
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
        return res
          .status(400)
          .json({ ok: false, message: 'No photo file provided' })
      }

      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !phoneClient ||
        !phoneProvider ||
        !location
      ) {
        return res.status(400).json({ ok: false, message: 'Missing User Data' })
      }

      const uploadedPhoto = await uploadPhoto(req.files.photo as FileI)
      const user: any = await userServices.createUsers({
        firstName,
        lastName,
        email,
        password,
        phoneClient,
        photo: uploadedPhoto.secure_url,
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
        photo: getCloudinaryResizedImage(user.dataValues.photo, 100),
        isProv: true,
        token: signToken({
          email: user.dataValues.email,
          id: user.dataValues.id,
        }),
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
  },
}
export default UsersControllers
