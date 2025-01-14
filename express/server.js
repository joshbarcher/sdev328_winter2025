import express from 'express';
import router from './routers/router.js';
import msgRouter from './routers/messageRouter.js';

const app = express();

app.use("/server/v1", router);
app.use("/server/msg", msgRouter);

app.listen(3001, () => console.log("Server started on 3001"));