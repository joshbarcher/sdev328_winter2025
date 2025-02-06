import express from 'express';
import books from './data.js';

const app = express();


//declare we are using Pug as a template language
app.set('view engine', 'pug');
app.set('views', "./src/views");

//static assets (css, JS, images, ...)
app.use(express.static('./src/public'));

//routes
const author = "<Your Name>";
app.get("/", (req, res) => {
    res.render('home', { 
        author,
        books: []
    })}
);
app.get("/about", (req, res) => {res.render('about', { author })});
app.get("/contact", (req, res) => {res.render('contact', { author })});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));