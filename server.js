const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());

//books array
let books = [
  { id: 1, title: "The Silent Patient", author: "Alex Michaelides" },
  { id: 2, title: "Gone Girl", author: "Gillian Flynn" },
  { id: 3, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson" },
  { id: 4, title: "The Da Vinci Code", author: "Dan Brown" },
  { id: 5, title: "Shutter Island", author: "Dennis Lehane" }
];
app.get("/", (req, res) => {
  res.redirect("/books");
});

//get all books
app.get("/books", (req, res) => {
  res.json(books);
});

//add new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

//update book by ID
app.put("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id === parseInt(id));
  
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.title = title || book.title;
  book.author = author || book.author;
  res.json(book);
});

//remove book by ID
app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));
  
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

