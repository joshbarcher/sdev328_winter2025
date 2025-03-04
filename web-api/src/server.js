import express from 'express';
import router from './routers/recipeRouter.js';

const app = express();

app.use(express.json()); //read in JSON payloads in the request body
app.use("/", router);

app.listen(3000, console.log("Started on 3000"));