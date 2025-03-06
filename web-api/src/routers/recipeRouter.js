import express from 'express';
import * as controller from './../controller/recipeController.js';

const router = express.Router();

//define a few routes
router.get("/recipes", controller.recipes);
router.get("/recipes/:recipeId", controller.recipeById);
router.post("/recipes", controller.addRecipe);
router.put("/recipes", controller.updateRecipe);
router.delete("/recipes/:recipeId", controller.deleteRecipe);

export default router;