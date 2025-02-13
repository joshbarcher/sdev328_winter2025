import express from 'express';
import controller from './controller.js';

const router = express.Router();

//make some routes...
router.get("/", controller.showHome);
router.get("/about", controller.showAbout);
router.get("/contact", controller.showContact);

export default router;