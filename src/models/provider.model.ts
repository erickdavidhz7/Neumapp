import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Providers = db.define('Providers', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  job_phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  location: {
    type:DataTypes.STRING,
    allowNull: false,
  },
})