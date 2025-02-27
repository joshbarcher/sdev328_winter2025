import Recipe from './../model/RecipeSchema.js';
import recipesArray from './../model/recipes.js';

//replace the ingredients array with a string
for (const recipe of recipesArray) {
    //convert array to string
    recipe.ingredients = JSON.stringify(recipe.ingredients);
} 

await Recipe.bulkCreate(recipesArray);
console.log(`Added ${recipesArray.length} recipes!`);