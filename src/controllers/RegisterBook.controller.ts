import { RegisterBookUseCase } from '../usecases/RegisterBook.usecase'
import { IController, IResponse, IRequest } from './Controller'

import { handleError } from './ErrorHandler'

export class RegisterBookController implements IController {
  private readonly registerBookUseCase: RegisterBookUseCase

  constructor(registerBookUseCase: RegisterBookUseCase) {
    this.registerBookUseCase = registerBookUseCase
  }

  async handle(req: IRequest): Promise<IResponse> {
    try {
      const { title } = req.body

      const output = await this.registerBookUseCase.execute({
        title: title,
      })

      return {
        statusCode: 201,
        body: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
