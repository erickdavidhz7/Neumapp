import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const ProviderServices = db.define(
    'Provider_Services',
    {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      estimated_minutes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      provider_description: {
        type: DataTypes.TEXT,
        allowNull:true,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    { timestamps: true }
  );
  
