const Post = require("../models/Post");

class PostController {
  async getAll(req, res) {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async create(req, res) {
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

  async getPost(req, res) {
    const { postId } = req.params;
    try {
      const post = await Post.findById(postId);

      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async removePost(req, res) {
    const { postId } = req.params;
    try {
      const deletedPost = await Post.remove({ _id: postId });

      res.json(deletedPost);
    } catch (err) {
      res.json({ message: err });
    }
  }

  async updatePost(req, res) {
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

module.exports = new PostController();
