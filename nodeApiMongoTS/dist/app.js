"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bookController = require("./controllers/bookController");
const app = express();
app.set("port", 3000);
app.use(express.json());
app.get("/books", bookController.allBooks);
app.get("/books/:id", bookController.getBook);
app.post("/books", bookController.addBook);
app.put("/books/:id", bookController.deleteBook);
app.post("/books/:id", bookController.updateBook);
app.listen(app.get("port"), () => {
    console.log("App is running on http://localhost:%d", app.get("port"));
});
//# sourceMappingURL=app.js.map