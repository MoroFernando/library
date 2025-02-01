import { HTTPMethod, IRoute } from './Route'
import { ListBooksController } from '../controllers/ListBooks.controller'
import { ListBooksUseCase } from '../../application/use-cases/ListBooks.usecase'
import { BookPrismaRepository } from '../../infrastructure/repositories/Books/BookPrisma.repository'
import { RegisterBookUseCase } from '../../application/use-cases/RegisterBook.usecase'
import { RegisterBookController } from '../controllers/RegisterBook.controller'
import { AuthorPrismaRepository } from '../../infrastructure/repositories/Authors/AuthorPrisma.repository'
import { BookMapper } from '../mappers/Book.mapper'
import { AuthorMapper } from '../mappers/Author.mapper'

const bookRepository = new BookPrismaRepository()
const authorRepository = new AuthorPrismaRepository()
const authorMapper = new AuthorMapper()
const bookMapper = new BookMapper(authorRepository, authorMapper)
const listBooksUseCase = new ListBooksUseCase(bookRepository, bookMapper)
const registerBookUseCase = new RegisterBookUseCase(
  bookRepository,
  authorRepository,
  bookMapper,
)

export const BookRoutes: IRoute[] = [
  {
    method: HTTPMethod.GET,
    path: '/books',
    controller: new ListBooksController(listBooksUseCase),
  },
  {
    method: HTTPMethod.POST,
    path: '/book',
    controller: new RegisterBookController(registerBookUseCase),
  },
]
