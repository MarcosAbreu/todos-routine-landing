const dotenv = require('dotenv').config()
const passport = require('passport');
const bcrypt = require('bcrypt');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const connection = require('./database')

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null,profile)
  }
));

passport.use( new LocalStrategy({
    usernameField: 'email',
  },
  async (email,password,done) =>{
    
    const sql = "SELECT * FROM users WHERE email='"+email+"'";
    connection.query(sql, async function (err, result, fields) {
      if (err) throw err;
      if(result[0] === undefined){
        console.log('No user with this email')
        return done(null,false,{message: 'No user with this email'})
      }
      try {
        if (await bcrypt.compare(password,result[0].password)){
          console.log('deu')
          return done(null,result[0])
        }else{
          return done(null,false,{message: 'Password incorrect'})
        }
      } catch (error) {
        return done(error)
      }
    });
    
    
  }))

passport.serializeUser((user,done)=>{
    done(null, user)
})
passport.deserializeUser((user,done)=>{
    done(null, user.id);
})

