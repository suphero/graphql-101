var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: {type: String},
    content: {type: String},
});

module.exports = mongoose.model('post', PostSchema);