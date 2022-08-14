require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })
    })
    .catch((error) => {
        console.log(error)
    })



