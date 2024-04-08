import { v4 as uuidv4 } from 'uuid'
import { Providers } from '../models/provider.model'
import { Reviews } from '../models/review.model'
import { Users } from '../models/user.model'
import UserI from '../interfaces/user.interface'
import { hashPassword } from '../utils/crypto'

const userServices = {
  createUsers: async (user: UserI) => {
    try {
      if (
        !user.firstName ||
        !user.lastName ||
        !user.email ||
        !user.password ||
        !user.phoneClient
      ) {
        throw new Error('Missing Data')
      }

      const newUser = await Users.create({
        id: uuidv4(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashPassword(user.password),
        phoneClient: user.phoneClient,
        phoneProvider: user.phoneProvider,
        status: user.status,
        isVerified: user.isVerified
      });

      await newUser.save();
      
      return newUser;
    } catch (error) {
      throw new Error(error as string);
    }
  },
  getAllUsers: async () => {
    try {
      const users = Users.findAll({
        include: [Reviews, Providers],
      })
      return users
    } catch (error) {
      throw new Error('Error al buscar usuarios')
    }
  },
  findUserByEmail: async (email: string) => {
    try {
      const userEmail = await Users.findOne({
        where: {
          email
        }
      })
      
      return userEmail
    } catch (error) {
      throw new Error('Error Searching The Data')
    }
  },
}
export default userServices
