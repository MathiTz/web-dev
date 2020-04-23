import { Request, Response } from "express";
import Post from "../../models/Post";

export default async function getAll(req: Request, res: Response) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
}
