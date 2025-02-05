import { ListBooksUseCase } from '../../application/use-cases/ListBooks.usecase'
import { IController, IRequest, IResponse } from './Controller'
import { handleError } from '../../errors/ErrorHandler'
import { container, injectable } from 'tsyringe'

@injectable()
export class ListBooksController implements IController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(request?: IRequest): Promise<IResponse> {
    try {
      const listBookuseCase = container.resolve(ListBooksUseCase)
      const output = await listBookuseCase.execute()

      return {
        statusCode: 200,
        data: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
