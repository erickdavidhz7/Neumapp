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
  { timestamps: true }
)
