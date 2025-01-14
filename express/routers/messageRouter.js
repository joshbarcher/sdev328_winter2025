import express from 'express';

const router = express.Router();

//define the path to the "hello" message
router.get("/hello", (req, res) => {
    res.status(200);
    res.send("Hello");
})

export default router;