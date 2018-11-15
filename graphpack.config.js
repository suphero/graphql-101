const mongoose = require('mongoose');
const mongoUrl = "mongodb://admin:123qwe@ds121726.mlab.com:21726/graphql-101";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true
});