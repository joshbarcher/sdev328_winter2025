import { readFileSync } from 'fs';

const getColor = (req, res) => {
    const { random, grayscale, uid, lastaccessed } = req.query;

    console.log(req.query);

    res.status(200);
    if (random === "true") {
        const colors = ["white", "orange", "blue", "red", "teal"];
        const randomColor = colors.find(color => Math.random() > 0.5);
        res.send(randomColor);
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