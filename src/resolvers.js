const Post = require('./models/post');
const Comment = require('./models/comment');
const {Types} = require('mongoose');

const resolvers = {
  Query: {
    post: (root, args) => Post.findOne(Types.ObjectId(args._id)),
    posts: () => Post.find({}),
    comment: (root, args) => Comment.findOne(Types.ObjectId(args._id)),
  },
  Post: {
    comments: (post) => Comment.find({postId: post._id})
  },
  Comment: {
    post: (comment) => Post.findOne(Types.ObjectId(comment.postId))
  },
  Mutation: {
    createPost: (root, args) => {
      const post = new Post({
        title: args.title,
        content: args.content
      });
      return post.save();
    },
    createComment: (root, args) => {
      const comment = new Comment({
        postId: args.postId,
        content: args.content
      });
      return comment.save();
    },
  },
};

export default resolvers;
