import { Router } from 'express';

import { SendForgotPasswordMailController } from '@modules/accounts/sendForgotPasswordMail/SendForgotPasswordMailContoller';

const passwordRoutes = Router();

const sendForgotPasswordMailController = new SendForgotPasswordMailController();

passwordRoutes.post('/forgot', sendForgotPasswordMailController.handle);

export { passwordRoutes };
