import express from 'express';
import AddressesController from '../controllers/addresses.controller';
import { authenticate, requireAdmin } from '../middlewares/authenticate';

const router = express.Router();

export default router
  .get('/', authenticate, AddressesController.getAddress)
  .post('/', authenticate, AddressesController.createAddress)
  .put('/', authenticate, AddressesController.updateAddress);