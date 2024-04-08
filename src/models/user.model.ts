import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Users = db.define('Users', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneClient: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'phone_client'
  },
  phoneProvider: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'phone_provider'
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active',
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    field: 'is_verified',
  },
})
