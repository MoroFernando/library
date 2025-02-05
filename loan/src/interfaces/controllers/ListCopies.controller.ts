import { IController, IRequest, IResponse } from './Controller'
import { handleError } from '../../errors/ErrorHandler'
import { container, injectable } from 'tsyringe'
import { ListCopiesUseCase } from '../../application/use-cases/ListCopies.usecase'

@injectable()
export class ListCopiesController implements IController {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async handle(request?: IRequest): Promise<IResponse> {
    try {
      const listCopiesuseCase = container.resolve(ListCopiesUseCase)
      const output = await listCopiesuseCase.execute()

      return {
        statusCode: 200,
        data: output,
      }
    } catch (error) {
      return handleError(error)
    }
  }
}
