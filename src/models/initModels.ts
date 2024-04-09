import { Users } from './user.model'
import { Reviews } from './review.model'
import { Providers } from './provider.model'
import { Orders } from './order.model'

export const initModels = () => {
  Reviews.belongsTo(Users)
  Reviews.belongsTo(Providers)
  Users.hasMany(Reviews)
  Users.hasMany(Orders)
  Users.hasOne(Providers)
  Providers.hasMany(Reviews)
  Providers.hasMany(Orders)
  Orders.belongsTo(Users)
  Orders.belongsTo(Providers)
}
