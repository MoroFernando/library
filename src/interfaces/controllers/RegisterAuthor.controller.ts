import { RegisterAuthorUseCase } from '../../application/use-cases/RegisterAuthor.usecase'
import { IController, IResponse, IRequest } from './Controller'
import { handleError } from '../../errors/ErrorHandler'
import { container, injectable } from 'tsyringe'

@injectable()
export class RegisterAuthorController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { name } = request

      const registerAuthorUseCase = container.resolve(RegisterAuthorUseCase)
      const output = await registerAuthorUseCase.execute({
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
