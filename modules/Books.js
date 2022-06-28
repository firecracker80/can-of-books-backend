'use strict'

const mongoose = require('mongoose');

const {Schema} = mongoose;

const booksSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true},
  img: {type: String, required: true}
});

const BookModel = mongoose.model('Book', booksSchema);

module.exports = BookModel;
