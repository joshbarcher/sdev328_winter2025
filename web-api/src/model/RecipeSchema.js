import sequelize from './../db/db.js';
import { DataTypes } from 'sequelize';

const Schema = sequelize.define("recipe", {
    recipeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    cookingTime: DataTypes.STRING,
    instructions: DataTypes.STRING
});

//don't forget await!
await Schema.sync({ alter: true });

export default Schema;