import express from 'express';
import * as controller from './../controller/recipeController.js';

const router = express.Router();

//define a few routes
router.get("/recipes", controller.recipes);
router.get("/recipes/:recipeId", controller.recipeById);

export default router;