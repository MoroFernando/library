import { Book } from '../../domain/entities/Book.entity'
import { IBookRepository } from '../../domain/repositories/Book.repository'
import { Category } from '../../domain/value-objects/Category.vo'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

type Input = {
  title: string
  category: string
  pagesNumber?: number
}

export class RegisterBookUseCase implements IUseCase<Input, IBookDTO> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(input: Input): Promise<IBookDTO> {
    const { title, category, pagesNumber } = input

    const categoryObject = category
      ? Category.create({ name: category })
      : undefined

    const book = Book.create({
      title: title,
      category: categoryObject,
      pagesNumber: pagesNumber,
    })

    console.log(book.category)
    await this.bookRepository.add(book)

    return {
      id: book.id,
      title: book.title,
      category: book.category?.name || null,
      pagesNumber: book.pagesNumber || null,
    }
  }
}
