import { Router } from 'express';
const socket = require('socket.io-client')('https://zrp-challenge-socket.herokuapp.com:443');
const routes = new Router();

import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth';
import HeroController from './app/controllers/HeroController';
import BattleController from './app/controllers/BattleController';

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.post('/heros', HeroController.store);
routes.get('/heros', HeroController.list);
routes.get('/heros/:id', HeroController.index);
routes.put('/heros/:id', HeroController.update);
routes.delete('/heros/:id', HeroController.delete);

routes.get('/battles', BattleController.index)
routes.put('/battles/:id', BattleController.update)
routes.post('/battles', BattleController.store)

socket.on('occurrence', function (occurrence) {
  BattleController.store(occurrence);
});

export default routes;
