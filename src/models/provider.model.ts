import { DataTypes } from 'sequelize'
import { db } from '../utils/database'
import { Service } from './services.model'
import providerServices from '../services/providers.services'

export const Providers = db.define(
  'Providers',
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    phoneProvider: {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'phone_provider',
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      afterCreate: async (attributes, options) => {
        try {
          const service = await Service.findOne({
            where: {
              name: 'Parche de neumáticos',
            },
          })
          await providerServices.createServiceProvider(
            attributes.dataValues.id,
            {
              estimatedMinutes: 30,
              price: 10000,
              ServiceId: service?.dataValues.id,
              providerDescription: '',
            }
          )
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
)
