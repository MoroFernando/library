import { ListBooksUseCase } from '../../application/use-cases/ListBooks.usecase'
import { IController, IRequest, IResponse } from './Controller'
import { handleError } from '../../errors/ErrorHandler'

export class ListBooksController implements IController {
  private readonly listBookuseCase: ListBooksUseCase

  constructor(listBookuseCase: ListBooksUseCase) {
    this.listBookuseCase = listBookuseCase
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const output = await this.listBookuseCase.execute()

      return {
        statusCode: 200,
        data: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
