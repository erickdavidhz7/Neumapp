import { DataTypes } from 'sequelize'
import { db } from '../utils/database'

export const Reviews = db.define('Reviews', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
        field: 'comment'
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'rating'
    }
})