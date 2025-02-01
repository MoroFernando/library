import { HTTPMethod, IRoute } from './Route'
import { RegisterAuthorUseCase } from '../../application/use-cases/RegisterAuthor.usecase'
import { AuthorPrismaRepository } from '../../infrastructure/repositories/Authors/AuthorPrisma.repository'
import { RegisterAuthorController } from '../controllers/RegisterAuthor.controller'

const authorRepository = new AuthorPrismaRepository()
const registerAuthorUseCase = new RegisterAuthorUseCase(authorRepository)

export const AuthorRoutes: IRoute[] = [
  {
    method: HTTPMethod.POST,
    path: '/author',
    controller: new RegisterAuthorController(registerAuthorUseCase),
  },
]
