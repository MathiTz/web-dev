"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = require("./../book");
// GET
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, books) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(books);
        }
    });
};
// GET ONE
exports.getBook = (req, res) => {
    book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// POST
exports.addBook = (req, res) => {
    let book = new book_1.default(req.body);
    book.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
// DELETE
exports.deleteBook = (req, res) => {
    book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted the Book");
        }
    });
};
// UPDATE
exports.updateBook = (req, res) => {
    book_1.default.findByIdAndUpdate({ _id: req.params.id }, req.body, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully updated book");
        }
    });
};
//# sourceMappingURL=bookController.js.map