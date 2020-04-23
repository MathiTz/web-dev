import * as express from "express";
import PostController from "../controller/PostController";
import { create, getAll, getOne, remove, update } from "../controller/Posts";

const router = express.Router();

// GET BACK ALL THE POSTS
router.get("/", getAll);

//SUBMITS A POST

router.post("/", create);

// GET BACK A SPECIFIC POST
router.get("/:postId", getOne);

// DELETE A SPECIFIC POST
router.delete("/:postId", remove);

//UPDATE A POST
router.patch("/:postId", update);

export default router;
