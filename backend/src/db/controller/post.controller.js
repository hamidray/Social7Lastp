const Post = require("../model/Post");
const Reaction = require("../model/Reaction");
const User = require("../model/User");

exports.addPost = async (userId, title, description = "", imageUrl = "") =>
  await Post.create({
    userId,
    title,
    description,
    imageUrl,
  });

exports.getAllPosts = async () =>
  await Post.findAll({
    include: [
      {
        model: User,
        attributes: [
          "id",
          "email",
          "firstName",
          "lastName",
          "isAdmin",
          "createdAt",
          "updatedAt",
        ],
      },
    ],
    attributes: [
      "id",
      "title",
      "description",
      "imageUrl",
      "createdAt",
      "updatedAt",
    ],
    order: [["updatedAt", "DESC"]],
  });
