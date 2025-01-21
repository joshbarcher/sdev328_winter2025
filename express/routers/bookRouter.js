import { Router } from 'express';

const router = Router();

router.get("/book/author", (req, res) => {
    res.status(200).send("Christopher Paolini");
})

router.get("/book/title", (req, res) => {
    res.status(200).send("Eragon");
})

router.get("/book/pages", (req, res) => {
    res.status(200).send("500");
})

router.get("/book/:detail/", (req, res) => {
    const detail = req.params.detail
    res.status(200);

    if (detail === "author") res.send("Brent Weeks");
    else if (detail === "title") res.send("Black Prism");
    else if (detail === "pages") res.send("900")
    else res.send("Not sure what you're looking for...")
})

router.get("/book/favorite/:name", (req, res) => {
    res.status(200).send(`Your favorite book is ${req.params.name}`);
})

export default router;