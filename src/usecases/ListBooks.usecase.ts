import { IBookDTO } from '../dtos/Book.dto'
import { Book } from '../entities/Book.entity'
import { IBookRepository } from '../repositories/Book.repository'
import { IUseCase } from './UseCase'

export class ListBooksUseCase implements IUseCase<void, IBookDTO[]> {
  private readonly bookRepository: IBookRepository

  constructor(bookRepository: IBookRepository) {
    this.bookRepository = bookRepository
  }

  async execute(): Promise<IBookDTO[]> {
    const books = await this.bookRepository.getAll()

    return this.presentOutput(books)
  }

  private presentOutput(books: Book[]): IBookDTO[] {
    return books.map((book) => {
      return {
        id: book.id,
        title: book.title,
        pagesNumber: book.pagesNumber,
      }
    })
  }
}
