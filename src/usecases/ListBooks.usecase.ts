import { Book } from '../entities/Book.entity'
import { IBookRepository } from '../repositories/Book.repository'
import { IUseCase } from './UseCase'

export class ListBooksUseCase implements IUseCase<void, Book[]> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(): Promise<Book[]> {
    const books = await this.bookRepository.getAll()

    return books
  }
}
