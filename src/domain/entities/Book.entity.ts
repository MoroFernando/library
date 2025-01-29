import { BookPagesNumberInvalid } from '../../errors/BookPagesNumberInvalid.error'
import { BookTitleInvalidError } from '../../errors/BookTitleInvalid.error'
import { BookTitleRequiredError } from '../../errors/BookTitleRequired.error'
import { Entity } from './Entity'

type BookProps = {
  id: string
  title: string
  pagesNumber?: number
}

export class Book extends Entity<BookProps> {
  static create(props: Omit<BookProps, 'id'>) {
    return new Book({
      id: crypto.randomUUID().toString(),
      title: props.title,
      pagesNumber: props.pagesNumber,
    })
  }

  static with(props: BookProps) {
    return new Book(props)
  }

  validate() {
    if (!this.props.title) {
      throw new BookTitleRequiredError()
    }

    if (this.props.title.length <= 3) {
      throw new BookTitleInvalidError()
    }

    if (this.props.pagesNumber && this.props.pagesNumber < 0) {
      throw new BookPagesNumberInvalid()
    }
  }

  get id() {
    return this.props.id
  }

  get title() {
    return this.props.title
  }

  get pagesNumber() {
    return this.props.pagesNumber
  }
}
