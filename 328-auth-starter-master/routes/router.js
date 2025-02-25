import { Router } from 'express';
import pageController from '../controllers/pageController.js';
import authController from '../controllers/authController.js';

const authRouter = Router();

//register
authRouter.get('/register', authController.registerPage);
authRouter.post('/register', authController.register);

//login
authRouter.get('/login', authController.loginPage);
authRouter.post('/login', authController.login);

//logout
authRouter.post('/logout', authController.logout);

//make sure the user is logged in for any of the routes below...
authRouter.use(authController.isLoggedIn);

//access pages
authRouter.get('/admin', authController.hasRole("admin"), pageController.adminPage);     //displays admin content
authRouter.get('/user', pageController.userPage);    //displays user content
// authRouter.get("/guest", null);
// authRouter.get("/settings", null);
//..

export default authRouter;