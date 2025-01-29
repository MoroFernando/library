import { Book } from '../domain/entities/Book.entity'
import { IBookRepository } from './Book.repository'

export class BookInMemomryRepository implements IBookRepository {
  private readonly books: Book[] = []

  async getAll() {
    return this.books
  }

  async add(book: Book) {
    this.books.push(book)
  }
}
