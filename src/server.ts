import express from 'express'
import {routes} from "./routes"
import { acessApi } from '../config'


const app = express()

app.use(express.json())
app.use(routes)
app.use(acessApi)

app.listen(3000, () => console.log("Server is running"))
