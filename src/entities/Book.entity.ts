import { BookPagesNumberInvalid } from '../errors/BookPagesNumberInvalid.error'
import { BookTitleInvalidError } from '../errors/BookTitleInvalid.error'
import { BookTitleRequiredError } from '../errors/BookTitleRequired.error'

type BookProps = {
  id: string
  title: string
  pagesNumber?: number
}

export class Book {
  private constructor(private readonly props: BookProps) {
    this.validate()
  }

  public static create(props: Omit<BookProps, 'id'>) {
    return new Book({
      id: crypto.randomUUID().toString(),
      title: props.title,
      pagesNumber: props.pagesNumber,
    })
  }

  public static with(props: BookProps) {
    return new Book(props)
  }

  private validate() {
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

  public get id() {
    return this.props.id
  }

  public get title() {
    return this.props.title
  }

  public get pagesNumber() {
    return this.props.pagesNumber
  }
}
