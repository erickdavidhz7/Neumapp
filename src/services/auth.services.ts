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

    if (!user) throw Error('User not found')

    const userLogin = user as unknown as UserLogin

    const verifyPassword = comparePassword(password, userLogin.password)

    if (verifyPassword) {
      return signToken({
        email: user.dataValues.email,
        id: user.dataValues.id,
      })
    }

    return false
  } catch (error) {
    return false
  }
}
