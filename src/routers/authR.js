import express from 'express'
import { validateAuthData, validateNewUserData } from '../middlewares/authMid.js'
let authRouter = express.Router()

authRouter.post('/signup')
authRouter.post('/signin')

export default authRouter