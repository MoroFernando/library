import { Router } from 'express'
import { expressAdapter } from './adapter.express'
import { BookPrismaRepository } from '../../repositories/BookPrisma.repository'
import { RegisterBookUseCase } from '../../../application/use-cases/RegisterBook.usecase'
import { ListBooksUseCase } from '../../../application/use-cases/ListBooks.usecase'
import { RegisterBookController } from '../../../interfaces/controllers/RegisterBook.controller'
import { ListBooksController } from '../../../interfaces/controllers/ListBooks.controller'

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
