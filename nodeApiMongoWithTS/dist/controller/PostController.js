"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("../models/Post");
class PostController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield Post_1.default.find();
                res.json(posts);
            }
            catch (err) {
                res.json({ message: err });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description } = req.body;
            const post = new Post_1.default({
                title,
                description,
            });
            try {
                const savedPost = yield post.save();
                res.json(savedPost);
            }
            catch (err) {
                res.json({ message: err });
            }
        });
    }
    getPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postId } = req.params;
            try {
                const post = yield Post_1.default.findById(postId);
                res.json(post);
            }
            catch (err) {
                res.json({ message: err });
            }
        });
    }
    removePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postId } = req.params;
            try {
                const deletedPost = yield Post_1.default.remove({ _id: postId });
                res.json(deletedPost);
            }
            catch (err) {
                res.json({ message: err });
            }
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { postId } = req.params;
            const { title } = req.body;
            try {
                const UpdatedPost = yield Post_1.default.updateOne({ _id: postId }, {
                    $set: {
                        title,
                    },
                });
                res.json(UpdatedPost);
            }
            catch (err) {
                res.json({ message: err });
            }
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=PostController.js.map