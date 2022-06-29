import * as Sequelize from 'sequelize'
import { sequelize } from '../db'

export const Role = sequelize.define(
    'role',
    {
        id: {
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        name: Sequelize.STRING
    },
    { tableName: 'role' }
)
