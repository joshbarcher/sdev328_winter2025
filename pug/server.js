import express from 'express';

const app = express();

//configure our templating language
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/pizza", (req, res) => {
    //render is for view templates
    res.render("pizza", {
        title: "My Pizza Page V1",
        type: "combo",
        ingredients: "pepperoni, mushrooms",
        cost: 12.99,
        comments: "<strong>I like it!</strong>"
    });
})

const PORT = 3500;
app.listen(PORT, () => console.log(`Server started ${PORT}`));