import { readFileSync } from 'fs';

const getColor = (req, res) => {
    const random = req.query.random;

    res.status(200);
    if (random === "true") {
        //"random" color
        res.send("red");
    } else {
        //the default color
        res.send("green");
    }
}

const getResource1 =(req, res) => {
    res.status(200);
    res.send("Here is resource1");
}

const getResource2 = (req, res) => {
    res.status(200);
    res.send("Here is resource2");
}

const getCourses = (req, res) => {
    let courses = readFileSync("./model/courses.json");
    courses = JSON.parse(courses);

    res.status(200);
    res.json(courses);
}

export default {
    getResource1,
    getResource2,
    getCourses,
    getColor
}