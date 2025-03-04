import * as dataLayer from './../db/recipeRepo.js';

export const recipes = async (req, res) => {
    const data = await dataLayer.getAllRecipes();
    res.status(200).json({
        message: "success",
        data
    });
}

export const recipeById = async (req, res) => {
    const recipeId = req.params.recipeId;
    const recipe = await dataLayer.getRecipeById(recipeId);

    if (recipe) {
        res.status(200).json({
            message: "success",
            data: recipe
        })
    } else {
        res.status(404).json({
            message: "failure - recipe not found",
            data: null
        })
    }
}

export const addRecipe = async (req, res) => {
    //more on this in a moment...
    const recipe = req.body;
    const addedRecipe = await dataLayer.addRecipe(recipe);

    res.status(200).json({
        message: "success",
        data: addedRecipe
    })
}