import { IBookRepository } from '../../domain/repositories/Book.repository'
import { IBookDTO } from '../dtos/Book.dto'
import { IUseCase } from './UseCase'

export class ListBooksUseCase implements IUseCase<void, IBookDTO[]> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(): Promise<IBookDTO[]> {
    const books = await this.bookRepository.getAll()

    return books.map((book) => ({
      id: book.id,
      title: book.title,
      category: book.category?.name || null,
      pagesNumber: book.pagesNumber || null,
    }))
  }
}
