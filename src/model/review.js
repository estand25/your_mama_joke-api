import mongoose from 'mongoose';
import Joke from './joke';
let Schema = mongoose.Schema;

let ReviewsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: String,
  joke: {
    type: Schema.Types.ObjectId,
    ref: "Joke",
    required: true
  }
});

module.exports = mongoose.model('Review', ReviewsSchema);
