import { RegisterBookUseCase } from '../../application/use-cases/RegisterBook.usecase'
import { IController, IResponse, IRequest } from './Controller'
import { handleError } from '../../errors/ErrorHandler'

export class RegisterBookController implements IController {
  private readonly registerBookUseCase: RegisterBookUseCase

  constructor(registerBookUseCase: RegisterBookUseCase) {
    this.registerBookUseCase = registerBookUseCase
  }

  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { title, category, authorId, pagesNumber } = request

      const output = await this.registerBookUseCase.execute({
        title: title,
        authorId: authorId,
        category: category,
        pagesNumber: pagesNumber,
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
