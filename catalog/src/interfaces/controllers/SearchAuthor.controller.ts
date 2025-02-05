import { SearchAuthorUseCase } from '../../application/use-cases/SearchAuthor.usecase'
import { IController, IResponse, IRequest } from './Controller'
import { handleError } from '../../errors/ErrorHandler'
import { container, injectable } from 'tsyringe'

@injectable()
export class SearchAuthorController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    try {
      const { searchKey } = request

      const searchAuthorUseCase = container.resolve(SearchAuthorUseCase)
      const output = await searchAuthorUseCase.execute({
        name: searchKey,
      })

      return {
        statusCode: 200,
        data: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
