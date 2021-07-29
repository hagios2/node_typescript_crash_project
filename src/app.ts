import express from "express";
import log from './logger'
import routes from './routes'
import cors from 'cors'
import dotenv from "dotenv";
dotenv.config({path: './config/.env'});
import connect from "./db/connect";

// const port = config.get("port") as number
// const host = config.get("host") as string

const PORT  = Number(process.env.PORT) || 3000 as number

const HOST  = process.env.HOST as string

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))


app.listen(PORT, () => {

    log.info(`server startd on port ${PORT}`)

    connect()

    routes(app)
})