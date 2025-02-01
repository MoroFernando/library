import { IBookRepository } from '../../domain/repositories/Book.repository'
import { BookMapper } from '../../interfaces/mappers/Book.mapper'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

export class ListBooksUseCase implements IUseCase<void, IBookDTO[]> {
  private readonly bookRepository: IBookRepository
  private readonly bookMapper: BookMapper

  constructor(bookRepository: IBookRepository, bookMapper: BookMapper) {
    this.bookRepository = bookRepository
    this.bookMapper = bookMapper
  }

  async execute(): Promise<IBookDTO[]> {
    const books = await this.bookRepository.getAll()

    return await this.bookMapper.toDTOs(books)
  }
}
