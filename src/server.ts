import express from 'express'
import {routes} from "./routes"
const cors = require("cors")

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(port, () => console.log("Server is running"))
