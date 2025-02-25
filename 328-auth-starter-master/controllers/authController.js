import User from './../model/user.js';
import passport from 'passport';

//register
const registerPage = (req, res) => res.status(200).render("register.pug", {
    error: req.query.error
});
const register = async (req, res) => {
    const newUser = req.body;
    console.log(`Adding new user: ${newUser.username}`);
    await User.create(newUser);
    res.redirect("/login");
}

//login
const loginPage = (req, res) => res.status(200).render("login.pug", {
    error: req.query.error
});
const login = passport.authenticate("local", {
    successRedirect: "/user",
    failureRedirect: "/login?error=Invalid Credentials"
})

//logout
const logout = (req, res) => {
    
}

//middleware to protect routes
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        return next(); //logged in
    }
    res.redirect("/login"); //logged out
}

//role has the specific role for a user on the website
const hasRole = role => {
    //return a middleware function (with role in scope)
    return (req, res, next) => {
        //verify the role
        if (req.user.role === role) {
            return next(); //move to the next middleware
        }
        res.redirect("/login?error=Cannot Access Page");
    }
}

export default { registerPage, register, loginPage, login, logout, isLoggedIn, hasRole }