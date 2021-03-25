import { Router } from 'express';
import 'reflect-metadata';

import { AutheticateUserController } from '../modules/accounts/authenticateUser/AuthenticateUserController';

const authenticateRoutes = Router();

const authenticateUserController = new AutheticateUserController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };