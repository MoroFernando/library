import { HTTPMethod, IRoute } from './Route'
import { ListBooksController } from '../controllers/ListBooks.controller'
import { ListBooksUseCase } from '../../application/use-cases/ListBooks.usecase'
import { BookPrismaRepository } from '../../infrastructure/repositories/BookPrisma.repository'
import { RegisterBookUseCase } from '../../application/use-cases/RegisterBook.usecase'
import { RegisterBookController } from '../controllers/RegisterBook.controller'

const bookRepository = new BookPrismaRepository()
const listBooksUseCase = new ListBooksUseCase(bookRepository)
const registerBookUseCase = new RegisterBookUseCase(bookRepository)

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
