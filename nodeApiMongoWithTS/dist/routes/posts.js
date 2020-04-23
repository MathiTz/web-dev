"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Posts_1 = require("../controller/Posts");
const router = express.Router();
// GET BACK ALL THE POSTS
router.get("/", Posts_1.getAll);
//SUBMITS A POST
router.post("/", Posts_1.create);
// GET BACK A SPECIFIC POST
router.get("/:postId", Posts_1.getOne);
// DELETE A SPECIFIC POST
router.delete("/:postId", Posts_1.remove);
//UPDATE A POST
router.patch("/:postId", Posts_1.update);
exports.default = router;
//# sourceMappingURL=posts.js.map