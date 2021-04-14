import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SendForgotPasswordMailUseCase } from './SendForgotPasswordMailUseCase';

class SendForgotPasswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const sendForgotePasswordMailUseCase = container.resolve(
      SendForgotPasswordMailUseCase
    );

    await sendForgotePasswordMailUseCase.execute(email);

    return response.send();
  }
}

export { SendForgotPasswordMailController };
