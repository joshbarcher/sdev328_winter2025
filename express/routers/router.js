import express from 'express';
import controller from './../controllers/controller.js';

const { 
    getResource1, 
    getResource2, 
    getCourses, 
    getColor 
} = controller;

const router = express.Router();

//GET is our HTTP method, /resource1 is our "endpoint"
//(req, res) => {} is a middleware function
router.get("/resource1", getResource1);
router.post("/resource2", getResource2);
router.get("/courses", getCourses);
router.get("/colors", getColor);

export default router;