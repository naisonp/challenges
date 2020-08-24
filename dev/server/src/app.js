import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  database() {
    mongoose.connect('mongodb://admin:1q2w3e4r@ds157641.mlab.com:57641/ihero-zrp', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  }

  routes() {
    this.server.use(routes);
  }

}

export default new App().server;
