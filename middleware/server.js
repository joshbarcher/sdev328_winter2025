import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan("dev"));
app.use(express.static("public"));

//define and use middleware
const logger = (req, res, next) => {
    console.log(`Request made for ${req.url}`);

    //pass this request to the next middleware
    next();
}

const calendar = (req, res, next) => {
    console.log(new Date().toUTCString());
    
    //pass this request to the next middleware
    next();
}

const attribution = (req, res, next) => {
    req.author = "Josh Archer";
    req.github = "http://github.com/archerjoshb";

    //pass this request to the next middleware
    next();
}

app.use(logger, calendar, attribution); //use the middleware!

app.get("/home", (req, res, next) => {
    res.status(200).send(`Home - Built by: ${req.author}`);
})

//catch-all for missing pages
app.use((req, res) => {
    res.status(404).send("Page not found!");
})

app.listen(4000, () => console.log("Server started on 4000"));