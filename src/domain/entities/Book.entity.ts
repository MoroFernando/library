import { BookAuthorIdRequiredError } from '../../errors/BookAuthorIdRequired.error'
import { BookPagesNumberInvalid } from '../../errors/BookPagesNumberInvalid.error'
import { BookTitleInvalidError } from '../../errors/BookTitleInvalid.error'
import { BookTitleRequiredError } from '../../errors/BookTitleRequired.error'
import { Category } from '../value-objects/Category.vo'

type BookProps = {
  id: string
  title: string
  authorId: string
  category?: Category
  pagesNumber?: number
}

export class Book {
  private constructor(private props: BookProps) {
    this.validate()
  }

  static create(props: Omit<BookProps, 'id'>) {
    return new Book({
      id: crypto.randomUUID().toString(),
      title: props.title,
      authorId: props.authorId,
      category: props.category,
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

    if (!this.props.authorId) {
      throw new BookAuthorIdRequiredError()
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

  get authorId() {
    return this.props.authorId
  }

  get category() {
    return this.props.category
  }

  get pagesNumber() {
    return this.props.pagesNumber
  }
}
