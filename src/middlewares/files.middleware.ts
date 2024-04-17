import { NextFunction, Request, Response } from 'express'
import { FileI } from '../interfaces/file.interface'

export const userPhotoValidator = (type: 'required' | 'optional') => {
  const isRequired = type === 'required' ? true : false
  const MAX_PHOTO_MB = 10
  const MIN_PHOTO_KB = 1
  return (req: Request, res: Response, next: NextFunction) => {
    if (!isRequired && (!req.files || !req.files.photo)) {
      next()
    } else {
      if (!req.files || !req.files.photo) {
        return res
          .status(400)
          .json({ errors: { photo: ['Photo file not found'] } })
      }

      const photoFile = req.files.photo as FileI

      const fileTypes = ['image/jpg', 'image/png', 'image/jpeg', 'image/webp']
      const fileExtensions = ['jpg', 'png', 'jpeg', 'webp']
      const fileSize = 1024 * 1024 * MAX_PHOTO_MB
      const minSize = 1024 * MIN_PHOTO_KB

      if (photoFile.size < minSize) {
        return res
          .status(400)
          .json({ errors: { photo: [`Min File size: ${MIN_PHOTO_KB}Kb`] } })
      }

      if (!fileTypes.includes(photoFile.mimetype)) {
        return res
          .status(400)
          .json({ errors: { photo: ['File types: png, jpeg, jpg, webp'] } })
      }

      const fileExtension = (
        photoFile.name.split('.').pop() as string
      ).toLocaleLowerCase()

      if (!fileExtensions.includes(fileExtension)) {
        return res
          .status(400)
          .json({
            errors: { photo: ['File extensions: png, jpeg, jpg, webp'] },
          })
      }

      if (photoFile.size > fileSize) {
        return res
          .status(400)
          .json({ errors: { photo: [`Max File size: ${MAX_PHOTO_MB}Mb`] } })
      }
      next()
    }
  }
}
