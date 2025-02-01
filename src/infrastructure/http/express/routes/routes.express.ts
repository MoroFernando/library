import { Router } from 'express'
import { expressAdapter } from './../adapters/adapter.express'
import { BookPrismaRepository } from '../../../repositories/BookPrisma.repository'
import { RegisterBookUseCase } from '../../../../application/use-cases/RegisterBook.usecase'
import { ListBooksUseCase } from '../../../../application/use-cases/ListBooks.usecase'
import { RegisterBookController } from '../../../../interfaces/controllers/RegisterBook.controller'
import { ListBooksController } from '../../../../interfaces/controllers/ListBooks.controller'
import { BookRoutes } from '../../../../interfaces/routes/Book.routes'

export const router = Router()
const bookRepository = new BookPrismaRepository()
const listBookUseCase = new ListBooksUseCase(bookRepository)
const registerBookUseCase = new RegisterBookUseCase(bookRepository)
const listBookController = new ListBooksController(listBookUseCase)
const registerBookController = new RegisterBookController(registerBookUseCase)

BookRoutes.map((route) =>
  router[route.method](route.path, expressAdapter(route.controller)),
)

router.get('/books', expressAdapter(listBookController))
router.post('/books', expressAdapter(registerBookController))
