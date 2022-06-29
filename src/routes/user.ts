import express from 'express'

const router = express.Router()

router.get('/users', (_req, res) => {
    return res.json({
        message: '/users get method'
    })
})

export default router
