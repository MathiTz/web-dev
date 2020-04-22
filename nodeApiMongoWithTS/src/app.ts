import { Request, Response } from "express";
import * as express from "express";
import * as cors from "cors";
import * as mongoose from "mongoose";
require("dotenv/config");

const port = process.env.PORT;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Import Routes
import postsRoute from "./routes/posts";

app.use("/posts", postsRoute);

// ROUTES

app.get("/", (req: Request, res: Response) => {
  res.send("We are on home");
});

// Connect To DB
mongoose.connect(
  "mongodb://127.0.0.1/local",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

// Listen to server
app.listen(port, () => {
  console.log(`App start on ${port}`);
});
