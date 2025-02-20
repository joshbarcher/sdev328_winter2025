import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import User from './../model/user.js';

//serializing user into session data
passport.serializeUser((user, done) => {
    console.log(`Serializing ${user.username} to ${user.userId}`);
    done(null, user.userId);
});

//deserialize user from session data
passport.deserializeUser(async (userId, done) => {
    console.log(`Deserializing: ${userId}`);

    //search for the user that matches the id stored in session
    const foundUser = await User.findByPk(userId);
    if (foundUser) {
        done(null, foundUser);
    } else {
        done(new Error("Couldn't deserialize user"), null);
    }
});

//add local strategy middleware provided by passport.js
passport.use(new LocalStrategy(async (username, password, done) => {
    const foundUser = await User.findOne({
        where: {
            username: username
        }
    })
    if (!foundUser) done(new Error("Username not found"), null);

    const matchedPass = await User.validatePassword(password, foundUser.password);
    if (!matchedPass) done(new Error("Passwords incorrect"), null);

    console.log(`Matched user - ${foundUser.username}`);
    done(null, foundUser);
}));