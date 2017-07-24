import mongoose from 'mongoose';
import { Router } from 'express';
import Joke from '../model/joke';
import Review from '../model/review';

import {authenticate} from '../middleware/authMiddleware';

export default({config, db}) => {
  let api = Router();

  // '/v1/ymja/joke/add' - add new joke
  api.post('/add', authenticate, (req,res) =>{
    let newJoke = new Joke();
    newJoke.name = req.body.name;
    newJoke.joketype = req.body.joketype;
    newJoke.setup = req.body.setup;
    newJoke.punchline = req.body.punchline;
    newJoke.actone = req.body.actone;
    newJoke.themix = req.body.themix;
    newJoke.callback = req.body.callback;

    newJoke.save(err => {
      if(err){
        res.send(err);
      }

      res.json({message: "New Your Mama Joke saved successfully"});
    });
  });

  // '/v1/ymja/joke' - get all jokes
  api.get('/', (req,res) => {
    Joke.find({}, (err, joke) =>{
      if(err){
        res.send(err);
      }

      res.json(joke);
    });
  });

  // '/v1/ymja/joke/:id' - get a specific joke
  api.get('/:id', (req,res) =>{
    Joke.findById(req.params.id, (err, joke) =>{
      if(err){
        res.send(err);
      }

      res.json(joke);
    });
  });

  // '/v1/ymja/joke/:id' - Update a specific joke
  api.put('/:id', authenticate, (req, res) =>{
    Joke.findById(req.params.id, (err,joke) => {
      if(err){
        res.send(err);
      }

      joke.name = req.body.name;
      joke.joketype = req.body.joketype;
      joke.setup = req.body.setup;
      joke.punchline = req.body.punchline;
      joke.actone = req.body.actone;
      joke.themix = req.body.themix;
      joke.callback = req.body.callback;

      joke.save(err =>{
        if(err){
          res.send(err);
        }
        res.json({message: "Joke info updated"});
      });
    });
  });

  // '/v1/ymja/joke/:id' - delete this joke
  api.delete('/:id', authenticate, (req,res) =>{
    Joke.findById(req.params.id, (err,joke) => {
      if(err){
          res.status(500).send(err);
          return
      }

      if(joke == null){
          res.status(400).send("Joke not Found");
      }

      Joke.remove({_id: req.params.id
        }, (err, joke) => {
          if(err){
            res.status(500).send(err);
            return;
          }

          Review.find({joke: req.params.id}, (err, reviews) =>{
            if(err){
              res.send(err);
            }

            Review.remove({joke: req.params.id}, (err, review) =>{
              if(err){
                res.send(err);
              }

              res.json({message: "Joke & joke's reviews have successfully removed"});
            });
          });
        });
      });
    });

    // '/v1/ymja/joke/reviews/add/:id' - add review for a specific joke id
    api.post('/review/add/:id', authenticate, (req, res) => {
      Joke.findById(req.params.id, (err, joke) => {
        if(err){
          res.send(err);
        }

        let newReview = new Review();

        newReview.title = req.body.title;
        newReview.text = req.body.text;
        newReview.joke = joke._id;

        newReview.save((err, review) => {
          if(err){
            res.send(err);
          }

          joke.reviews.push(newReview);
          joke.save(err => {
            if(err){
              res.send(err);
            }

            res.json({message: "Joke review saved!"});
          });
        });
      });
    });

    // '/v1/ymja/joke/reviews/:id' - get review(s) for a specific joke if
    api.get('/reviews/:id', (req,res) =>{
      Review.find({joke: req.params.id}, (err, reviews) =>{
        if(err){
          res.send(err);
        }

        res.json(reviews);
      });
    });

    // '/v1/ymja/joke/:joketype' - get joke of a specific joketype
    api.get('/joketype/:joketype', (req,res) =>{
      Joke.find({joketype: req.params.joketype}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    // '/v1/ymja/joke/:setup' - get joke of a specific setup
    api.get('/setup/:setup', (req,res) =>{
      Joke.find({setup: req.params.setup}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    // '/v1/ymja/joke/:punchline' - get joke of a specific punchline
    api.get('/punchline/:punchline', (req,res) =>{
      Joke.find({punchline: req.params.punchline}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    // '/v1/ymja/joke/:actone' - get joke of a specific actone
    api.get('/actone/:actone', (req,res) =>{
      Joke.find({actone: req.params.actone}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    // '/v1/ymja/joke/:themix' - get joke of a specific themix
    api.get('/themix/:themix', (req,res) =>{
      Joke.find({themix: req.params.themix}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    // '/v1/ymja/joke/:callback' - get joke of a specific callback
    api.get('/callback/:callback', (req,res) =>{
      Joke.find({callback: req.params.callback}, (err, joke) =>{
        if(err){
          res.send(err);
        }

        res.json(joke);
      });
    });

    return api;
}
