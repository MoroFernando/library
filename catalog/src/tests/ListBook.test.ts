import { ListBooksUseCase } from '../application/use-cases/ListBooks.usecase'
import { BookInMemomryRepository } from '../infrastructure/repositories/BookInMemory.repository'
import { ListBooksController } from '../interfaces/controllers/ListBooks.controller'

test('Deve retornar a lista de livros do catálogo', async () => {
  const repo = new BookInMemomryRepository()
  const useCase = new ListBooksUseCase(repo)
  const controller = new ListBooksController(useCase)

  const response = await controller.handle()

  console.log(response)
})
