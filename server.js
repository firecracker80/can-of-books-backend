'use strict';

//REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Books = require('./modules/Books');

// const Seed = require('./seed.js');

mongoose.connect(process.env.DB_URL);
//REQUIRED MODULES
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});
//USE
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;
//ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Welcome!');
});

app.get('/books', getBooks);

async function getBooks(req, res, next){
  try {
    let results = await Books.find();
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

app.get('*', (req, res) => {
  res.status(404).send('Not available.');
});

app.post('/books', async (req, res, next) => {
  try {
    const createdBook = await Books.create(req.body);
    res.status(200).send(createdBook);
  } catch (error) {
    res.status(404).send('Not found.');
    // TODO: send status 400 here, not 500
    next(error);
  }
});

app.delete('/books/:id', deleteBook);

async function deleteBook(req, res, next) {
  let id = req.params.id;
  console.log(id);
  try {
    await Books.findByIdAndDelete(id)
    res.status(200).send('book deleted successfully');
  } catch(error) {
    next(error);
  }
}

//ERROR

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});

//LISTEN
app.listen(PORT, () => console.log(`listening on ${PORT}`));
