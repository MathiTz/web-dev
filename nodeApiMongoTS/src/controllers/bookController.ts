import { Request, Response } from "express";
import Book from "./../book";

// GET
export let allBooks = (req: Request, res: Response) => {
  let books = Book.find((err: any, books: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(books);
    }
  });
};

// GET ONE
export let getBook = (req: Request, res: Response) => {
  Book.findById(req.params.id, (err: any, book: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
};

// POST
export let addBook = (req: Request, res: Response) => {
  let book = new Book(req.body);

  book.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(book);
    }
  });
};

// DELETE
export let deleteBook = (req: Request, res: Response) => {
  Book.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Successfully Deleted the Book");
    }
  });
};

// UPDATE
export let updateBook = (req: Request, res: Response) => {
  Book.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    (err: any, book: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated book");
      }
    }
  );
};
