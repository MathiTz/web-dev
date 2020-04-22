import { Request, Response } from "express";
import Post from "../models/Post";

class PostController {
  async getAll(req: Request, res: Response) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async create(req: Request, res: Response) {
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
  }

  async getPost(req: Request, res: Response) {
    const { postId } = req.params;
    try {
      const post = await Post.findById(postId);

      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async removePost(req: Request, res: Response) {
    const { postId } = req.params;
    try {
      const deletedPost = await Post.remove({ _id: postId });

      res.json(deletedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async updatePost(req: Request, res: Response) {
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
}

export default new PostController();
