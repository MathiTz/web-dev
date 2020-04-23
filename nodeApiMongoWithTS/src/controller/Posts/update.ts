import { Request, Response } from "express";
import Post from "../../models/Post";

export default async function updatePost(req: Request, res: Response) {
  const { postId } = req.params;
  const { title } = req.body;
  try {
    const UpdatedPost = await Post.updateOne(
      { _id: postId },
      {
        $set: {
          title,
        },
      }
    );

    res.json(UpdatedPost);
  } catch (err) {
    res.json({ message: err });
  }
}
