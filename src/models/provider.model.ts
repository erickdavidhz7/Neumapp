import { DataTypes } from 'sequelize';
import { db } from '../utils/database';

export const Providers = db.define('Providers', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  providerPhone: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'provider_phone',
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
})
