import { ListBooksController } from '../controllers/ListBooks.controller'
import { BookInMemomryRepository } from '../repositories/BookInMemory.repository'
import { ListBooksUseCase } from '../usecases/ListBooks.usecase'

test('Deve retornar a lista de livros do catálogo', async () => {
  const repo = new BookInMemomryRepository()
  const useCase = new ListBooksUseCase(repo)
  const controller = new ListBooksController(useCase)

  const response = await controller.handle()

  console.log(response)
})
