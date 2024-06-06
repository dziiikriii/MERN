import express, { application, response } from "express"
import {PORT, mongoURL} from "./config.js"
import mongoose from "mongoose"
import {Menu} from './models/menuModel.js'
import menusRoute from './routes/menusRoute.js'
import cors from 'cors'

const app = express()

// CORS Policy
// Option 1 : Allow all origins with default of cors
app.use(cors())
// Option 2 : Allow custom origins
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
// }))

app.use(express.json())
app.use('/menus', menusRoute)





mongoose.connect(mongoURL).then(() => {
    console.log('App connected to database')
    app.listen(PORT, () => {
        console.log(`App is listening to port ${PORT}`)
        
    })
}).catch((error) => {
    console.log(error)
})