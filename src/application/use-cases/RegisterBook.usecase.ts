import { Book } from '../../domain/entities/Book.entity'
import { IAuthorRepository } from '../../domain/repositories/Author.repository'
import { IBookRepository } from '../../domain/repositories/Book.repository'
import { Category } from '../../domain/value-objects/Category.vo'
import { AuthorNotFoundError } from '../../errors/AuthorNotFound.error'
import { BookMapper } from '../../interfaces/mappers/Book.mapper'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

type Input = {
  title: string
  authorId: string
  category: string
  pagesNumber?: number
}

export class RegisterBookUseCase implements IUseCase<Input, IBookDTO> {
  private readonly bookRepository: IBookRepository
  private readonly authorRepository: IAuthorRepository

  constructor(
    bookRepository: IBookRepository,
    authorRepository: IAuthorRepository,
  ) {
    this.bookRepository = bookRepository
    this.authorRepository = authorRepository
  }

  async execute(input: Input): Promise<IBookDTO> {
    const { title, category, pagesNumber, authorId } = input

    const authorExists = await this.authorRepository.findById(authorId)
    if (!authorExists) throw new AuthorNotFoundError()

    const categoryObject = category
      ? Category.create({ name: category })
      : undefined

    const book = Book.create({
      title: title,
      authorId: authorId,
      category: categoryObject,
      pagesNumber: pagesNumber,
    })

    await this.bookRepository.add(book)

    return new BookMapper().toDTO(book)
  }
}
