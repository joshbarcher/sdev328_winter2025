import { DataTypes } from "sequelize";
import sequelize from './../db/db.js'; //connect to DB!

const PetSchema = sequelize.define("pet", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            len: [4, 20]
        }
    }, 
    type: {
        type: DataTypes.STRING,
        validate: {
            isIn: [["dog", "cat", "bird", "reptile"]]
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 100
        }
    },
    adoptable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    bio: DataTypes.TEXT,
    birthDate: {
        type: DataTypes.DATE
    }
})

//this is a promise that creates the table, dropping it if it already exists
await PetSchema.sync({ force: true });

export default PetSchema;