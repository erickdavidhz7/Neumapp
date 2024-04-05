import { Providers } from "../models/provider.model"
import { Reviews } from "../models/review.model"
import { Users } from "../models/user.model"

const userServices = {
  getAllUsers: async () => {
    try {
      const users = Users.findAll({
        include: [Reviews, Providers]
      })
      return users
    } catch (error) {
      throw new Error('Error al buscar usuarios')
    }
  },
}
export default userServices