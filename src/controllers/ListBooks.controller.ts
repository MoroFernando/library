import { IController, IResponse } from './Controller'
import { ListBooksUseCase } from '../usecases/ListBooks.usecase'
import { handleError } from './ErrorHandler'

export class ListBooksController implements IController {
  private readonly listBookuseCase: ListBooksUseCase

  constructor(listBookuseCase: ListBooksUseCase) {
    this.listBookuseCase = listBookuseCase
  }

  async handle(): Promise<IResponse> {
    try {
      const output = await this.listBookuseCase.execute()

      return {
        statusCode: 200,
        body: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
