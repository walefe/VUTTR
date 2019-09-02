import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ToolsController from './app/controllers/ToolsController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolsController.index);
routes.post('/tools', ToolsController.store);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;
