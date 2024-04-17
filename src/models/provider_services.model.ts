import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const ProviderServices = db.define(
    'Provider_Services',
    {
      id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        field:'id'
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        field:'price'
      },
      estimatedMinutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field:'estimated_minutes'
      },
      providerDescription: {
        type: DataTypes.TEXT,
        allowNull:true,
        field: 'provider_description'
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: 'is_active'
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_deleted'
      }
    },
    { timestamps: true }
  );
  
