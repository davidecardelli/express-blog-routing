const express = require("express");
const dotenv = require("dotenv");
const app = express()

// ! importo i controller
const postsController = require("./controllers/posts.js");

dotenv.config();

// ! uso public per i miei file statici
app.use(express.static("public"));

// ! definisco le rotte e aggancio i controller per la gestione dei vari metodi
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1> <br> <a href="/posts">I post del blog</a>');
});
app.get("/posts", postsController.index);

// ! metto in ascolto
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})
