import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;

let JokeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  joketype:{
    type: String,
    required: true
  },
  setup:{
    type: String,
    required: true
  },
  punchline:{
    type: String,
    required: true
  },
  actone:{
    type: String,
    required: false
  },
  themix:{
    type: String,
    required: false
  },
  callback:{
    type: String,
    required: false
  },
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

module.exports = mongoose.model('Joke',JokeSchema);
