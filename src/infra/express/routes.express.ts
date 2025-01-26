import { Router } from 'express'
import { ListBooksController } from '../../controllers/ListBooks.controller'
import { ListBooksUseCase } from '../../usecases/ListBooks.usecase'
import { expressAdapter } from './adapter.express'
import { BookPrismaRepository } from '../../repositories/BookPrisma.repository'
import { RegisterBookUseCase } from '../../usecases/RegisterBook.usecase'
import { RegisterBookController } from '../../controllers/RegisterBook.controller'

export const routes = Router()

const bookRepository = new BookPrismaRepository()

const listBookUseCase = new ListBooksUseCase(bookRepository)
const registerBookUseCase = new RegisterBookUseCase(bookRepository)

const listBookController = new ListBooksController(listBookUseCase)
const registerBookController = new RegisterBookController(registerBookUseCase)

routes.get('/', async (req, res) => {
  res.status(200).json({ message: 'Server running!' })
})

routes.get('/books', expressAdapter(listBookController))
routes.post('/books', expressAdapter(registerBookController))
