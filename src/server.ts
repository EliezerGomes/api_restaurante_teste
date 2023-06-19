import express from 'express'
import {routes} from "./routes"
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen({port: process.env.PORT || 3000, host: "0.0.0.0", calback: () => {console.log("server is running")}})
