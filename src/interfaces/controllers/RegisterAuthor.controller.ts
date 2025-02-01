import { RegisterAuthorUseCase } from '../../application/use-cases/RegisterAuthor.usecase'
import { IController, IResponse, IRequest } from './Controller'
import { handleError } from '../../errors/ErrorHandler'

export class RegisterAuthorController implements IController {
  private readonly registerAuthorUseCase: RegisterAuthorUseCase

  constructor(registerAuthorUseCase: RegisterAuthorUseCase) {
    this.registerAuthorUseCase = registerAuthorUseCase
  }

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { name } = request

      const output = await this.registerAuthorUseCase.execute({
        name,
      })

      return {
        statusCode: 201,
        data: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
