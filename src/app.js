import express from 'express'
import cors from 'cors'

import usersRouter from './routers/usersR.js'
import authRouter from './routers/authR.js'
import urlsRouter from './routers/urlsR.js'
import rankingRouter from './routers/rankingR.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use([ urlsRouter, usersRouter, rankingRouter, authRouter ])

let PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Servidor executando na porta ${PORT}`)
})