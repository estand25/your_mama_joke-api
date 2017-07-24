import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initiailizeDB from '../db';
import account from '../controller/account';
import joke from '../controller/joke';

let router = express();

// connect to db
initiailizeDB(db =>{

  // internal middleware
  router.use(middleware({config, db}));

  // api routes v1 (/v1)
  router.use('/account', account({config, db}));
  router.use('/joke', joke({config,db}));
});

export default router;
