import { DataTypes } from "sequelize";
import sequelize from './../db/db.js'; //connect to DB!

const { STRING, INTEGER, BOOLEAN, TEXT, DATE } = DataTypes;

const PetSchema = sequelize.define("pet", {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: STRING, //varchar
    type: STRING,
    age: INTEGER,
    adoptable: BOOLEAN,
    bio: TEXT,
    birthDate: DATE
})

//this is a promise that creates the table, dropping it if it already exists
await PetSchema.sync({ force: true });

export default PetSchema;