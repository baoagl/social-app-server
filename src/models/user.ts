import * as Sequelize from 'sequelize'
import { sequelize } from '../db'

export const User = sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING
    },
    { tableName: 'user' }
)
