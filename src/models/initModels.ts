import { Users } from './user.model'
import { Reviews } from './review.model'

export const initModels = () => {
  Reviews.belongsTo(Users)
  Users.hasMany(Reviews)
  //* Ejemplo de uso de las relaciones:
  // Users.hasMany(Reviews)
  // Reviews.belongsTo(Users)
}