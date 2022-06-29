import 'dotenv/config'
import express, { Response } from 'express'
import cors from 'cors'
import { sequelize } from './db'
import { authRouter } from './routes'

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))

app.get('/', (_req, res: Response): Response => {
    return res.json({
        message: 'hello world'
    })
})

app.use('/auth', authRouter)

app.use((_req, res, next) => {
    res.status(404).send('Unable to find the requested resource!')
    next()
})

const main = async (): Promise<void> => {
    try {
        await sequelize.authenticate()
        const port = process.env.PORT || 5001
        app.listen(port, function () {
            console.log(`🚀🚀  Server is running on port ${port}  🚀🚀`)
        })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

main()
