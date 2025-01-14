import express from 'express';
import dotenv from 'dotenv';
import router from './routers/router.js';
import msgRouter from './routers/messageRouter.js';

//read in our env configuration
dotenv.config({
    path: "./config.env"
})

const app = express();

app.use("/server/v1", router);
app.use("/server/msg", msgRouter);

console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on ${port}`));