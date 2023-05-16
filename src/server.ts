import express from 'express'
import {routes} from "./routes"
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(routes)
app.use(cors())

app.listen(3000, () => console.log("Server is running"))
