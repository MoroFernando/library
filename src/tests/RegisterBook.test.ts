import { RegisterBookUseCase } from '../application/use-cases/RegisterBook.usecase'
import { BookInMemomryRepository } from '../infrastructure/repositories/BookInMemory.repository'
import { RegisterBookController } from '../interfaces/controllers/RegisterBook.controller'

test('Deve registrar um novo livro no catálogo', async () => {
  const repo = new BookInMemomryRepository()
  const useCase = new RegisterBookUseCase(repo)
  const controller = new RegisterBookController(useCase)

  const input = {
    title: 'It! A coisa',
  }

  const response = await controller.handle({
    body: input,
  })

  console.log(response)
})
