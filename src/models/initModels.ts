import { Users } from './user.model'
import { Reviews } from './review.model'
import { Providers } from './provider.model'

export const initModels = () => {
  Reviews.belongsTo(Users)
  Reviews.belongsTo(Providers)
  Users.hasMany(Reviews)
  Users.hasOne(Providers)
  Providers.hasMany(Reviews)
}