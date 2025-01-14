import { readFileSync } from 'fs';

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

const exportedValues = {
    getResource1: getResource1,
    getResource2: getResource2,
    getCourses: getCourses
}

export default exportedValues;