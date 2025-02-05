import { RegisterBookUseCase } from '../../application/use-cases/RegisterBook.usecase'
import { IController, IResponse, IRequest } from './Controller'
import { handleError } from '../../errors/ErrorHandler'
import { container, injectable } from 'tsyringe'

@injectable()
export class RegisterBookController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { title, category, authorId, pagesNumber } = request

      const registerBookUseCase = container.resolve(RegisterBookUseCase)
      const output = await registerBookUseCase.execute({
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
