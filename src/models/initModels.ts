import { Users } from './user.model'
import { Reviews } from './review.model'
import { Providers } from './provider.model'
import { Orders } from './order.model'
import { Service } from './services.model'
import { ProviderServices } from './provider_services.model'

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
  Service.hasMany(ProviderServices, { foreignKey: { allowNull: false } })
  Providers.hasMany(ProviderServices, { foreignKey: { allowNull: false } })
  ProviderServices.belongsTo(Providers)
  Providers.belongsTo(Users)
}
