import { Request, Response } from "express";
import Post from "../../models/Post";

export default async function removePost(req: Request, res: Response) {
  const { postId } = req.params;
  try {
    const deletedPost = await Post.remove({ _id: postId });

    res.json(deletedPost);
  } catch (err) {
    res.json({ message: err });
  }
}
