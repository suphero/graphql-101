const Post = require('./models/post');
const Comment = require('./models/comment');

const resolvers = {
  Query: {
    post: (root, {_id}) => Post.findOne(ObjectId(_id)),
    posts: () => Post.find({}),
    comment: (root, {_id}) => Comment.findOne(ObjectId(_id)),
  },
  Post: {
    comments: (post) => Comment.find({postId: post._id})
  },
  Comment: {
    post: (comment) => Post.findOne(comment.postId)
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
