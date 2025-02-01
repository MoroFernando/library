import { HTTPMethod, IRoute } from './Route'
import { RegisterAuthorUseCase } from '../../application/use-cases/RegisterAuthor.usecase'
import { AuthorPrismaRepository } from '../../infrastructure/repositories/Authors/AuthorPrisma.repository'
import { RegisterAuthorController } from '../controllers/RegisterAuthor.controller'
import { AuthorMapper } from '../mappers/Author.mapper'

const authorRepository = new AuthorPrismaRepository()
const authorMapper = new AuthorMapper()
const registerAuthorUseCase = new RegisterAuthorUseCase(
  authorRepository,
  authorMapper,
)

export const AuthorRoutes: IRoute[] = [
  {
    method: HTTPMethod.POST,
    path: '/author',
    controller: new RegisterAuthorController(registerAuthorUseCase),
  },
]
