"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Post;
//# sourceMappingURL=Post.js.map