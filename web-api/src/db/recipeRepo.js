import RecipeSchema from './../model/RecipeSchema.js';

//R in CRUD - read
export const getAllRecipes = async () => {
    return await RecipeSchema.findAll();
}

export const getRecipeById = async (recipeId) => {
    return await RecipeSchema.findByPk(recipeId);
}

//C in CRUD - create
export const addRecipe = async (recipe) => {
    return await RecipeSchema.create(recipe);
}

//U in CRUD - update
export const updateRecipe = async (recipe) => {
    return await RecipeSchema.update(recipe, {
        where: {
            recipeId: recipe.recipeId
        }
    })
}

//D in CRUD - delete
export const deleteRecipe = async (recipeId) => {
    return await RecipeSchema.destroy({
        where: {
            recipeId
        }
    })
}