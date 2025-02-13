import { DataTypes } from "sequelize";
import sequelize from './../db/db.js'; //connect to DB!

const PetSchema = sequelize.define("pet", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING, //varchar
    type: DataTypes.STRING,
    age: DataTypes.INTEGER,
    adoptable: DataTypes.BOOLEAN,
    bio: DataTypes.TEXT,
    birthDate: DataTypes.DATE
})

//this is a promise that creates the table, dropping it if it already exists
await PetSchema.sync({ force: true });

export default PetSchema;