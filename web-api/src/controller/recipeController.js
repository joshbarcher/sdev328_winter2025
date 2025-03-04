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
    console.log(req.body);

    //converts the ingredients field to JSON to store in the table
    recipe.ingredients = JSON.stringify(recipe.ingredients);

    const addedRecipe = await dataLayer.addRecipe(recipe);

    res.status(200).json({
        message: "success",
        data: addedRecipe
    })
}

export const updateRecipe = async (req, res) => {
    const updatedRecipe = req.body;
    updatedRecipe.ingredients = JSON.stringify(updatedRecipe.ingredients);
    const savedRecipe = await dataLayer.updateRecipe(updatedRecipe);

    if (savedRecipe) {
        res.status(200).json({
            message: "success",
            data: savedRecipe
        })
    } else {
        res.status(404).json({
            message: "failure - recipe not found",
            data: null
        })
    }
}