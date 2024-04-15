import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Providers = db.define('Providers', {
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
})
