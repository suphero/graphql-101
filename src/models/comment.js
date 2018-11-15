var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    postId: {type: String},
    content: {type: String},
});

module.exports = mongoose.model('comment', CommentSchema);