import sequelize from "../db/db.js";
import User from './../model/user.js';

await User.create({
    username: "jarcher",
    password: "password123?!",
    role: "user"
})

console.log("It worked");