import express from 'express';
import router from './router.js';

const app = express();

//declare we are using Pug as a template language
app.set('view engine', 'pug');
app.set('views', "./src/views");

//static assets (css, JS, images, ...)
app.use(express.static('./src/public'));

//routes
app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));