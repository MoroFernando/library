import { Book } from '../entities/Book.entity'

export interface IBookRepository {
  getAll(): Promise<Book[]>
  add(book: Book): Promise<void>
}
