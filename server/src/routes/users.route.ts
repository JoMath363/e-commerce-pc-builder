import express from 'express';
import UsersController from '../controllers/users.controller';

const router = express.Router();

export default router
  .get('/', UsersController.getAll)
  .get('/:id', UsersController.getByEmail)
  .put('/:id', UsersController.updateById)
  .delete('/:id', UsersController.deleteById)
  .post('/auth/register', UsersController.register)
  .post('/auth/login', UsersController.login)
  /* .post('/auth/logout', UsersController.logout)
  .get('/auth/info', UsersController.getInfo); */