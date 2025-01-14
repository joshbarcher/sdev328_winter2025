import express from 'express';
import { readFileSync } from 'fs';

const app = express();

//GET is our HTTP method, /resource1 is our "endpoint"
//(req, res) => {} is a middleware function
app.get("/resource1", (req, res) => {
    res.status(200);
    res.send("Here is resource1");
})

app.post("/resource2", (req, res) => {
    res.status(200);
    res.send("Here is resource2");
})

app.get("/courses", (req, res) => {
    let courses = readFileSync("./courses.json");
    courses = JSON.parse(courses);

    res.status(200);
    res.json(courses);
})

app.listen(3001, () => console.log("Server started on 3001"));