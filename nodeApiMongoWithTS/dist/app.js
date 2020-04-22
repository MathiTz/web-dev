"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");
const port = process.env.PORT;
const app = express();
// Middlewares
app.use(express.json());
app.use(cors());
// Import Routes
const posts_1 = require("./routes/posts");
app.use("/posts", posts_1.default);
// ROUTES
app.get("/", (req, res) => {
    res.send("We are on home");
});
// Connect To DB
mongoose.connect("mongodb://127.0.0.1/local", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to DB!");
});
// Listen to server
app.listen(port, () => {
    console.log(`App start on ${port}`);
});
//# sourceMappingURL=app.js.map