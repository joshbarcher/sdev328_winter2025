import express from 'express';

const app = express();

//add a route 
app.get("/index", (req, res) => {
    res.send("Hello, from Express.js!");
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});