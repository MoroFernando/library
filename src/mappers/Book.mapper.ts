import { IBookDTO } from '../dtos/Book.dto'
import { Book } from '../entities/Book.entity'
import { Mapper } from './Mapper'

export class BookMapper extends Mapper<Book, IBookDTO> {
  mapper(book: Book): IBookDTO {
    return {
      id: book.id,
      title: book.title,
      pagesNumber: book.pagesNumber,
    }
  }
}
