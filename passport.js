const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { JWT_SECRET } = require('./configuration');
const User = require('./models/user')

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        //find the user specified in token
        const user = await User.findById(payload.sub);

        //if user doesnt exist, handle it
        if (!user) {
            return done(null, false);
        }

        //Otherwise, return the user
        done(null, user);

    } catch (error) {
        done(error, false);
    }
}));