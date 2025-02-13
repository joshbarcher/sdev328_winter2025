import books from './data.js';

const author = "Josh";
const showHome = (req, res) => {
    res.render('home', { 
        author,
        books: books,
        favorite: books[8]
    })
}

const showAbout = (req, res) => {
    res.render('about', { author });
}

const showContact = (req, res) => {
    res.render('contact', { author });
}

export default { showAbout, showContact, showHome }