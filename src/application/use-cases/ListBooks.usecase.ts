import { IBookRepository } from '../../domain/repositories/Book.repository'
import { BookMapper } from '../../interfaces/mappers/Book.mapper'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

export class ListBooksUseCase implements IUseCase<void, IBookDTO[]> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(): Promise<IBookDTO[]> {
    const books = await this.bookRepository.getAll()

    return new BookMapper().toDTOs(books)
  }
}
