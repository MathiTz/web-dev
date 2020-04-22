const express = require("express");
const port = 3000;
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

// Middlewares
app.use(express.json());
app.use(cors());

// Import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES

app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect To DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

// Listen to server
app.listen(port, () => {
  console.log(`App start on ${port}`);
});
