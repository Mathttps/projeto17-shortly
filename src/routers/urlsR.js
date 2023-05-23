import express from 'express'
import { addShortUrl, deleteUrl, getShortUrl, openUrl } from '../controllers/urls.js'
import { checkToken } from '../middlewares/authentication.js'
import { validateUrlFormat } from '../middlewares/urlsMid.js'
let urlsRouter = express.Router()

urlsRouter.get('/urls/:id')
urlsRouter.get('/urls/open/:shortUrl')
urlsRouter.post('/urls/shorten' )
urlsRouter.delete('/urls/:id')

export default urlsRouter