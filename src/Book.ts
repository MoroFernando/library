type BookProps = {
  id: string
  title: string
  pagesNumber?: number
}

export class Book {
  private constructor(private props: BookProps) {
    this.validate()
  }

  public static create(props: Omit<BookProps, 'id'>) {
    return new Book({
      id: crypto.randomUUID(),
      title: props.title,
      pagesNumber: props.pagesNumber,
    })
  }

  private validate() {
    if (!this.props.title) {
      throw new Error('Book title is Required!')
    }

    if (this.props.title.length <= 3) {
      throw new Error('Book title must be at least 3 charaters long')
    }

    if (this.props.pagesNumber && this.props.pagesNumber < 0) {
      throw new Error('Book pages number must be positive')
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
