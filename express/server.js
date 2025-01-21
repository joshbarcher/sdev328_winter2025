import express from 'express';
import dotenv from 'dotenv';
import router from './routers/router.js';
import msgRouter from './routers/messageRouter.js';
import bookRouter from './routers/bookRouter.js';

//read in our env configuration
dotenv.config({
    path: "./config.env"
})

const app = express();

//mount the router
app.use("/server/v1", router);
app.use("/server/msg", msgRouter);
app.use("/", bookRouter);

//console.log(process.env);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server started on ${port}`));