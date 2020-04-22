"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PostController_1 = require("../controller/PostController");
const router = express.Router();
// GET BACK ALL THE POSTS
router.get("/", PostController_1.default.getAll);
//SUBMITS A POST
router.post("/", PostController_1.default.create);
// GET BACK A SPECIFIC POST
router.get("/:postId", PostController_1.default.getPost);
// DELETE A SPECIFIC POST
router.delete("/:postId", PostController_1.default.removePost);
//UPDATE A POST
router.patch("/:postId", PostController_1.default.updatePost);
exports.default = router;
//# sourceMappingURL=posts.js.map