import { Request, Response } from "express";
import Post from "../../models/Post";

const create = async (req: Request, res: Response) => {
  const { title, description } = req.body;

  const post = new Post({
    title,
    description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
};

export default create;
