import RecipeSchema from './../model/RecipeSchema.js';

//R in CRUD - read
export const getAllRecipes = async () => {
    return await RecipeSchema.findAll();
}

export const getRecipeById = async (recipeId) => {
    return await RecipeSchema.findByPk(recipeId);
}