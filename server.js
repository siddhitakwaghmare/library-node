const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static("public"));

let books = [];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.json({message: "Book added"});
});

app.delete("/books/:index", (req, res) => {
    books.splice(req.params.index, 1);
    res.json({message: "Book deleted"});
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});