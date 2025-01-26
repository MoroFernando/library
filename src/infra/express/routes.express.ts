import { Router } from 'express'
import { ListBooksController } from '../../controllers/ListBooks.controller'
import { BookInMemomryRepository } from '../../repositories/BookInMemory.repository'
import { ListBooksUseCase } from '../../usecases/ListBooks.usecase'
import { expressAdapter } from './adapter.express'

export const routes = Router()

const bookRepository = new BookInMemomryRepository()
const listBookUseCase = new ListBooksUseCase(bookRepository)
const listBookController = new ListBooksController(listBookUseCase)

routes.get('/', async (req, res) => {
  res.status(200).json({ message: 'Server running!' })
})

routes.get('/books', expressAdapter(listBookController))
