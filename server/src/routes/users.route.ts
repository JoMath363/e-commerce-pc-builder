import express from 'express';
import UsersController from '../controllers/users.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', authenticate, requireAdmin, UsersController.getAll)
  .get('/:email', authenticate, requireAdmin, UsersController.getByEmail)
  .put('/:email', authenticate, requireAdmin, UsersController.updateByEmail)
  .delete('/:email', authenticate, requireAdmin, UsersController.deleteByEmail)
  .post('/auth/register', UsersController.register)
  .post('/auth/login', UsersController.login)
  .get('/auth/info', authenticate, UsersController.getInfo);