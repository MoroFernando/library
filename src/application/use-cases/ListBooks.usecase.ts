import { inject, injectable } from 'tsyringe'
import { IBookRepository } from '../../domain/repositories/Book.repository'
import { BookMapper } from '../../interfaces/mappers/Book.mapper'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

@injectable()
export class ListBooksUseCase implements IUseCase<void, IBookDTO[]> {
  constructor(
    @inject('BookMapper') private bookMapper: BookMapper,
    @inject('BookRepository') private bookRepository: IBookRepository,
  ) {}

  async execute(): Promise<IBookDTO[]> {
    const books = await this.bookRepository.getAll()

    return await this.bookMapper.toDTOs(books)
  }
}
