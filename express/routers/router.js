import express from 'express';
import controller from './../controllers/controller.js';

const router = express.Router();

//GET is our HTTP method, /resource1 is our "endpoint"
//(req, res) => {} is a middleware function
router.get("/resource1", controller.getResource1);
router.post("/resource2", controller.getResource2);
router.get("/courses", controller.getCourses);

export default router;