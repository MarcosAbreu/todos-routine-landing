const dotenv = require('dotenv').config()
const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const bodyParser = require('body-parser')
const cors = require('cors')

const passportSetup = require('./passport')
const passport = require('passport')

const server = express()

server.use(session(
    {
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 4*60*60*100 }
    }
))

server.use(passport.initialize());
server.use(flash());
server.use(passport.session());

server.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

server.use(bodyParser.json());
server.use(
    bodyParser.urlencoded({extended: true,})
)

const authRoute = require('./routes/auth')
server.use('/auth',authRoute)

server.listen('5000',()=>{console.log('Server is running!')})