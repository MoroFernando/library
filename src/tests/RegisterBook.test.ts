import { RegisterBookController } from '../controllers/RegisterBook.controller'
import { BookInMemomryRepository } from '../repositories/BookInMemory.repository'
import { RegisterBookUseCase } from '../usecases/RegisterBook.usecase'

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
