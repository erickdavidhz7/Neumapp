import { Request, Response } from 'express'
import { seedsService } from './seed.service'
import { UploadedFile } from 'express-fileupload'

export const seedsController = {
  usersProviders: async (req: Request, res: Response) => {
    try {
      const jsonUsers = req.files?.json1 as UploadedFile
      const jsonProviders = req.files?.json2 as UploadedFile
      await seedsService.usersProviders(jsonUsers, jsonProviders)
      return res.json({ message: 'Data created' })
    } catch (error: any) {
      console.log(error)
      if (error.status) {
        return res
          .status(error.status)
          .json({ ok: false, message: error.msg, at: 'seed' })
      }
      return res.status(500).json('Internal server error')
    }
  },
}
