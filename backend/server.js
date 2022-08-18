require('dotenv').config()
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')
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
app.use('/api/user', userRoutes)

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



