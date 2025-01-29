import { Book } from '../../domain/entities/Book.entity'
import { IBookRepository } from '../../domain/repositories/Book.repository'
import { IUseCase } from './UseCase'

type Input = {
  title: string
}

export class RegisterBookUseCase implements IUseCase<Input, void> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(input: Input): Promise<void> {
    const { title } = input

    const book = Book.create({
      title: title,
    })

    await this.bookRepository.add(book)

    return
  }
}
