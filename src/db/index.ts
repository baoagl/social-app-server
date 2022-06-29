import { Sequelize } from 'sequelize'

const uri = process.env.DATABASE_URL || ''

export const sequelize = new Sequelize(uri, {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})
