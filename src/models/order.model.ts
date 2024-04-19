import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Orders = db.define('Orders', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: 'delivery',
    allowNull: false,
    field: 'type',
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'code',
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
    field: 'description',
  },
  status: {
    type: DataTypes.ENUM,
    values: ['started', 'in process', 'finished', 'cancelled'],
    allowNull: false,
    field: 'status',
  },
})
