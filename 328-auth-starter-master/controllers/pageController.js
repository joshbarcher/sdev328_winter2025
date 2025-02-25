
const userPage = (req, res) => {
    console.log(req.user.username);
    if (req.user) {
        res.status(200).render("user", {});
    } else {
        res.redirect("/login");
    }
}

const adminPage = (req, res) => {
    console.log(req.user.username);
    res.status(200).render("admin", {})
}

export default { userPage, adminPage }