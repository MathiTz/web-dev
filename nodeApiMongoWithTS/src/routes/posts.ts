import * as express from "express";
import PostController from "../controller/PostController";

const router = express.Router();

// GET BACK ALL THE POSTS
router.get("/", PostController.getAll);

//SUBMITS A POST

router.post("/", PostController.create);

// GET BACK A SPECIFIC POST
router.get("/:postId", PostController.getPost);

// DELETE A SPECIFIC POST
router.delete("/:postId", PostController.removePost);

//UPDATE A POST
router.patch("/:postId", PostController.updatePost);

export default router;
