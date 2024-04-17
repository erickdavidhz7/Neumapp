import { defaultPhotoUrl } from '../controllers/users.controllers'
import { getCloudinaryResizedImage } from '../utils/cloudinary'
import { comparePassword } from '../utils/crypto'
import { signToken } from '../utils/jwt.util'
import userServices from './users.services'

interface UserLogin {
  email: string
  password: string
}

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await userServices.findUserByEmail(email)

    if (!user) throw { status: 400, msg: 'User not registerd' }

    const userLogin = user as unknown as UserLogin

    const verifyPassword = comparePassword(password, userLogin.password)

    const token = signToken({
      email: user.dataValues.email,
      id: user.dataValues.id,
    })

    if (verifyPassword) {
      return {
        token,
        email: user.dataValues.email,
        firstName: user.dataValues.firstName,
        lastName: user.dataValues.lastName,
        photo:
          user.dataValues.photo != defaultPhotoUrl
            ? getCloudinaryResizedImage(user.dataValues.photo, 100)
            : defaultPhotoUrl,
        isProv: !!user.dataValues.Provider,
      }
    }

    return false
  } catch (error) {
    throw error
  }
}
