import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { User } from '../models/user'

const register = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const user = await User.findOne({
        where: {
            email: email.toLowerCase()
        }
    })
    if (user) {
        return res.status(409).send('User already exists.')
    }

    const hashPassword = bcrypt.hashSync(password, 10)
    const newUser = {
        email: email,
        password: hashPassword
    }
    const createUser = await User.create(newUser)
    if (!createUser) {
        return res.status(400).send('An error occurs. Please try again.')
    }
    return res.send({
        email
    })
}

const AuthController = {
    register
}

export default AuthController
