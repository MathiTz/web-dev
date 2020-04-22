const mongoogse = require("mongoose");

const PostSchema = mongoogse.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoogse.model("Posts", PostSchema);

export default Post;
