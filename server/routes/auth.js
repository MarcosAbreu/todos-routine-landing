const router = require('express').Router();
const passport = require('passport')
const bcrypt = require('bcrypt')

const CLIENT_URL = 'http://localhost:3000'

const connection = require('../database')

let users = [];

router.get('/login/success',(req,res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: 'successfull',
            user: req.user,
        })
    }
})

router.get('/logout',(req,res) => {
    req.logout();
    res.redirect(CLIENT_URL)
})

router.get('/login/failed',(req,res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    })
})

router.get("/google",passport.authenticate("google",{scope:["profile"]}))

router.get("/google/callback",passport.authenticate("google",{
    successRedirect: CLIENT_URL+'/home',
    failureRedirect: "/login/failed",
}))

router.post('/register', async (req,res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.password,10);
        const sql = "INSERT INTO users (first_name,surname,email,password) VALUES ('"+req.body.firstName+"','"+req.body.surname+"','"+req.body.email+"','"+hashPassword+"')"
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
        res.status(200);
    }catch{
       res.redirect('/register');
    }
})

router.post('/login', passport.authenticate('local',{
    successRedirect: '/home',
    failureRedirect: '/register',
    failureFlash: true
}))

module.exports = router;