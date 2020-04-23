import { Request, Response } from "express";
import Post from "../../models/Post";

export default async function getPost(req: Request, res: Response) {
  const { postId } = req.params;
  try {
    const post = await Post.findById(postId);

    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
}
