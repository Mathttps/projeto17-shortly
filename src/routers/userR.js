import express from 'express'
import { getUserData } from '../controllers/users.js'
import { checkToken } from '../middlewares/att.js'
let usersRouter = express.Router()

usersRouter.get('/users/me')

export default usersRouter