import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Service = db.define(
  'Services',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { max: 128 },
      field: 'name',
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: { max: 512 },
      field: 'description',
    },
  },
  {
    timestamps: true,
    hooks: {
      afterSync: () => {
        Service.findOrCreate({
          where: { name: 'Parche de neumáticos' },
          defaults: {
            id: '4917ee58-a1c3-4fc8-9f35-e8ed93d42b30',
            description: 'Default Service',
          },
        })
          .then(() => {
            console.log('Default service created')
          })
          .catch((err) => {
            console.log('Error at create default service')
          })
      },
    },
  }
)
