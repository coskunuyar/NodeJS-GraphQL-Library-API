const mongoose = require('mongoose');
const Schema = mongoose.schema;

const AuthorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Author',AuthorSchema);