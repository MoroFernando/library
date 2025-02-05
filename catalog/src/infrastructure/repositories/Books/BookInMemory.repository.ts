import { injectable } from 'tsyringe'
import { Book } from '../../../domain/entities/Book.entity'
import { IBookRepository } from '../../../domain/repositories/Book.repository'

@injectable()
export class BookInMemomryRepository implements IBookRepository {
  private readonly books: Book[] = []

  async getAll() {
    return this.books
  }

  async add(book: Book) {
    this.books.push(book)
  }
}
